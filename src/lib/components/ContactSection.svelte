<script lang="ts">
	import { sectionBackgrounds } from '../backgrounds';
	import Panel from './Panel.svelte';

	import normalUrges from '../assets/i_have_normal_urges.gif';
</script>

<Panel bg={sectionBackgrounds.contact}>
	{#snippet image()}
		<img src={normalUrges} alt="Happy PC" style="height: 300px;" />
	{/snippet}

	<div class="p-5">
		<p>
			PLEASE <a href="mailto:joshrl@proton.me">contact me</a> if you have any
			questions or want to talk about programming/computer science, music, games,
			or pretty much anything else.
		</p>

		<p>Find me around</p>

		<p><a href="https://github.com/LilyRL">/LilyRL on Github</a></p>
		<p><a href="https://www.youtube.com/@lily_lopes0">@lily_lopes0 on YouTube</a></p>
		<p><a href="https://rateyourmusic.com/~evillily">~evillily on RYM</a></p>
		<p><a href="https://crates.io/users/LilyRL">LilyRL on crates.io</a></p>
		<p><a href="https://lilyrl.com">My website can be found here</a></p>
		<p>
			<a href="mailto:joshrl@proton.me"
				>My primary email where i have notifications turned on is
				joshrl@proton.me, I haven't got around to changing it</a
			>
		</p>
		<p>
			My Bitwarden master password is
			<code>f7aWj3HQvkfpfC</code>
		</p>
	</div>
</Panel>
