uniform sampler2D gcolor;
uniform sampler2D gdepth;

varying vec4 texcoord;

uniform float near;
uniform float far;

float edgeDetect(vec2 coord){
	vec4 frag = texture2D(gdepth, coord);
	if(frag.b == 0.0){
		float st = max((1.0 - frag.r) * 0.0025, .00075);  
		float dThreshold = frag.r - ( 	
				((texture2D(gdepth, coord + vec2(st, 0.0)).r) + 
				(texture2D(gdepth, coord + vec2(0.0, st)).r) + 
				(texture2D(gdepth, coord - vec2(st, 0.0)).r) + 
				(texture2D(gdepth, coord - vec2(0.0, st)).r)) / 4.0    
		);
		if(dThreshold  < (-0.03 - near) / (far - near)) {
			if(frag.g > 0.12) {
				return min(frag.r, 0.9); 
			} 
			if(dThreshold < (-2.0 - near) / (far - near)){
				return min(frag.r, 0.9);
			}
		}
	}
	return 1.0;
}


void main() {
	vec4 color = texture2D(gcolor, texcoord.st);
	color.rgb *= edgeDetect(texcoord.st);
	FragColor[0] = texture2D(gcolor, texcoord.st);
	FragColor[1] = texture2D(gdepth, texcoord.st);
	FragColor[3] = color;
}
