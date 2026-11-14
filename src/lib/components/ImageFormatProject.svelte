<script lang="ts">
	import { sectionBackgrounds } from '../backgrounds';
	import Project from './Project.svelte';

	import picture from '../assets/picture.gif';
	import imageFormat from '../assets/image_format.gif';
</script>

<Project bg={sectionBackgrounds.imageFormat}>
	{#snippet image()}
		<img src={picture} alt="Ornate frame" />
	{/snippet}

	<img src={imageFormat} alt="Tile based compression" />

	<p>
		Link: <a href="https://github.com/LilyRL/sge">https://github.com/LilyRL/sge</a>
	</p>

	<p>
		Written in C. I wanted to try my hand at creating an image format with lossy
		compression, without doing much research on how other image formats worked. I
		did notice that jpegs seem to be split into tiles, which gave me the idea to
		use a tile based approach in my own format. I'm not great at C so the code
		isn't amazingly well organised. The files starting with stb_* and the
		harness.c were not written by me.
	</p>

	<p>
		First, it checks if the image contains any transparency, and if it doesn't we
		set a flag at the start of the file and use RGB instead of RGBA for the rest
		of the file, saving space.
	</p>

	<p>
		Then it splits the image into 8x8 tiles, and checks if each follows one of
		these criteria. It does this by computing the sum of the difference squared
		between the actual image data, and how it will look when decoded.
	</p>

	<ol>
		<li>
			Find the average color of the tile, if the tile as a whole is close to
			being a solid square of that color, just save it as a solid tile with that
			average colour (storing in 4/5 bytes, flag + rgb(a)).
		</li>
		<li>
			If not, try the same with a 4 point gradient on each of the corners
			(storing i).
		</li>
		<li>If not, does it only have 2 colours, we can store it using 1 bit per pixel.</li>
		<li>
			If not, does it only have 16 colours, we can store it using 4 bits per
			pixel.
		</li>
		<li>If not we store the full image data.</li>
	</ol>

	<p>
		In the case of a tile that will be encoded using a solid block or gradient, I
		compute the DFT, using the Cooley-Tukey radix-2 FFT algorithm (as the tiles
		are guarenteed to be 8x8 anyway), to isolate the high frequency noise in that
		tile, and encode just the magnitude of this noise, so it can be approximated
		in decoding. The noise pattern will not be the same, but someone looking at
		the image hopefully wouldn't be able to tell that.
	</p>

	<p>The resulting bytes are then compressed using huffman encoding.</p>

	<p>
		Also I lowk forgot to ever get around to making it work with images that have
		dimensions not divisible by 8, so it just crops.
	</p>
</Project>
