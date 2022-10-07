#version 330 core

layout(location = 0) out vec4 outColor;
layout(location = 1) out vec3 outNormal;
layout(location = 2) out vec4 outVertex;


in vec3 color;
in vec3 pos;
in vec3 norm;
in vec2 texCoord;

uniform sampler2D colorTex;
uniform sampler2D specularTex;

vec3 N;




void main()
{
	N = normalize (norm);
	//outNormal = vec4(N,1.0);
	outNormal = N;
	outVertex= vec4(pos,1.0);
	outColor.rgb = texture(colorTex, texCoord).rgb;   
	outColor.a = texture(specularTex, texCoord).r;   
}

