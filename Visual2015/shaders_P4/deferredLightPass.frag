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

vec3 shade();


void main() {

	Ka = texture(colorTex, texCoord).rgb;
	pos = texture(vertexTex, texCoord).rgb;
	N = texture(normalTex, texCoord).rgb;
	Ks = texture(colorTex, texCoord).a;

	vec3 c = vec3(0.0);
	c = Ia * Ka;

	vec3 L = normalize (lpos - pos);
	vec3 diffuse = Id * Ka * dot (L,N);
	c += clamp(diffuse, 0.0, 1.0);
	
	vec3 V = normalize (-pos);
	vec3 R = normalize (reflect (-L,N));
	float factor = clamp (dot (R,V),0.0, 1.0);
	vec3 specular = Is*Ks*pow(factor,alpha);
	c += clamp(specular, 0.0, 1.0);
   
    outColor = vec4(c,1.0);
}

