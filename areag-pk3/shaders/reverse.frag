void main()
{
    vec2 coord = vec2(1.0 - TexCoord.x, TexCoord.y);

    FragColor = texture(InputTexture, coord);

	/*if (timeFactor > 0)
    {
		float tau = 6.28318530717958647692;
		
		vec2 texSize = textureSize(InputTexture, 0);
		
		// offset the pixel location by this amount, a sine wave to create a wobble effect
		vec2 timeOffset = vec2(timeFactor * sin(tau * TexCoord.y + timer * 0.02), timeFactor * sin(tau * TexCoord.x + timer * 0.02));
		vec2 coord = TexCoord + timeOffset;
		
		// return black if the resulting coord isn't on screen
		vec4 color = (coord.x > 0 && coord.x < 1 && coord.y > 0 && coord.y < 1) ?
			texture(InputTexture, coord) : vec4(0, 0, 0, 0);
		
		FragColor = color;
	}
	else FragColor = texture(InputTexture, TexCoord);*/
}
