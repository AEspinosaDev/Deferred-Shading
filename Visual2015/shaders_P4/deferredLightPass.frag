#version 330 core


//Color de salida
out vec4 outColor;

//Variables Variantes
in vec2 texCoord;

//Textura
uniform sampler2D colorTex;
uniform sampler2D vertexTex; //Almacenamos en esta textura, la posicion de los frags en cordenadas de la camara
uniform sampler2D normalTex;

//Propiedades frag
vec3 pos;
vec3 Ka;
float Ks;
vec3 N;
float alpha = 80.0;

struct Light {
    vec3 Position;
    vec3 Color;
    
    float Linear;
    float Quadratic;
    float Radius;
};

const int NR_LIGHTS = 12;
uniform Light lights[NR_LIGHTS];

vec3 shade();
vec3 shadePointLight(vec3 lpos, vec3 color);

void main() {

	Ka = texture(colorTex, texCoord).rgb;
	pos = texture(vertexTex, texCoord).rgb;
	N = texture(normalTex, texCoord).rgb;
	Ks = texture(colorTex, texCoord).a;

   vec3 c = vec3(0.0); 
   for(int i =0; i<NR_LIGHTS;i++){
        c+=shadePointLight(lights[i].Position,lights[i].Color);
   }

  outColor = vec4(c,1.0);
}


vec3 shadePointLight(vec3 lpos, vec3 color){
    vec3 Ia = vec3 (0.2);
    vec3 Id = vec3 (1.0);
    vec3 Is = vec3 (1.0);
    float constant = 1.0f;	
    float linear = 0.09f;
    float quadratic = 0.032f;
    

    float d= length(lpos - pos);
    float att = 1.0 / (constant + linear * d + quadratic * (d * d));    
    
    vec3 c = vec3(0.0);
    vec3 ambient = Ia*Ka;
    ambient *= att;

    vec3 L = normalize (lpos - pos);
    vec3 diffuse = Id * Ka * dot (L,N);
    diffuse *= att;
    c += clamp(diffuse, 0.0, 1.0);
 

    vec3 V = normalize (-pos);   
    vec3 R = normalize (reflect (-L,N));
    float factor = clamp (dot (R,V),0.0, 1.0);
    vec3 specular = Is*Ks*pow(factor,alpha);
    specular *= att;
    c += clamp(specular, 0.0, 1.0);


    
    return c *= color;
 }