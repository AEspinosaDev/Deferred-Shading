#version 330 core


//Color de salida
out vec4 outColor;

//Variables Variantes
in vec2 texCoord;

//Textura
uniform sampler2D colorTex;
uniform sampler2D vertexTex; //Almacenamos en esta textura, la posicion de los frags en cordenadas de la camara
uniform sampler2D normalTex;

vec3 pos;
vec3 Ka;

float Ks;
vec3 N;
float alpha = 80.0;

//Propiedades de la luz
vec3 Ia = vec3 (0.1);
vec3 Id = vec3 (1.0);
vec3 Is = vec3 (0.7);
vec3 lpos = vec3 (0.0); 

struct Light {
    vec3 Position;
    vec3 Color;
    
    float Linear;
    float Quadratic;
    float Radius;
};

const int NR_LIGHTS = 32;
uniform Light lights[NR_LIGHTS];

vec3 shade();


void main() {

	Ka = texture(colorTex, texCoord).rgb;
	pos = texture(vertexTex, texCoord).rgb;
	N = texture(normalTex, texCoord).rgb;
	Ks = texture(colorTex, texCoord).a;

	lpos = lights[3].Position;

	vec3 c = vec3(0.0);
	c = Ia * Ka;

	vec3 L = normalize (lpos - pos);
	vec3 diffuse = lights[3].Color * Ka * dot (L,N);
	c += clamp(diffuse, 0.0, 1.0);
	
	vec3 V = normalize (-pos);
	vec3 R = normalize (reflect (-L,N));
	float factor = clamp (dot (R,V),0.0, 1.0);
	vec3 specular = lights[3].Color*Ks*pow(factor,alpha);
	c += clamp(specular, 0.0, 1.0);
//   c*=lights[3].Color;

    outColor = vec4(c,1.0);
}

vec3 shade(){
	vec3 c = vec3(0.0);

	c = lights[3].Position;

	return c;
//	 vec3 FragPos = texture(gPosition, TexCoords).rgb;
//    vec3 Normal = texture(gNormal, TexCoords).rgb;
//    vec3 Diffuse = texture(gAlbedoSpec, TexCoords).rgb;
//    float Specular = texture(gAlbedoSpec, TexCoords).a;
//    
//    // then calculate lighting as usual
//    vec3 lighting  = Diffuse * 0.1; // hard-coded ambient component
//    vec3 viewDir  = normalize(viewPos - FragPos);
//    for(int i = 0; i < NR_LIGHTS; ++i)
//    {
//        // calculate distance between light source and current fragment
//        float distance = length(lights[i].Position - FragPos);
//        if(distance < lights[i].Radius)
//        {
//            // diffuse
//            vec3 lightDir = normalize(lights[i].Position - FragPos);
//            vec3 diffuse = max(dot(Normal, lightDir), 0.0) * Diffuse * lights[i].Color;
//            // specular
//            vec3 halfwayDir = normalize(lightDir + viewDir);  
//            float spec = pow(max(dot(Normal, halfwayDir), 0.0), 16.0);
//            vec3 specular = lights[i].Color * spec * Specular;
//            // attenuation
//            float attenuation = 1.0 / (1.0 + lights[i].Linear * distance + lights[i].Quadratic * distance * distance);
//            diffuse *= attenuation;
//            specular *= attenuation;
//            lighting += diffuse + specular;
//        }
//    }    
//    FragColor = vec4(lighting, 1.0);
}
