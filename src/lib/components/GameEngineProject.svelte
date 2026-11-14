<script lang="ts">
	import { sectionBackgrounds } from '../backgrounds';
	import Project from './Project.svelte';

	import doctor from '../assets/hero.gif';
	import gameEngine from '../assets/game_engine.gif';
</script>

<Project bg={sectionBackgrounds.gameEngine}>
	{#snippet image()}
		<img src={doctor} alt="Doctor examining an infected computer" />
	{/snippet}

	<img src={gameEngine} alt="The Game Engine" />

	<p>
		Link: <a href="https://github.com/LilyRL/sge">https://github.com/LilyRL/sge</a>
	</p>

	<p>
		Written in Rust and designed to be as simple and easy to use as possible,
		without requiring significant knowlage of the Rust langauge. Lots of
		documentation in the form of <a href="https://lilyrl.github.io/sge/">a book</a
		>
		explaining the features and systems, and 74 (at time of writing)
		<a href="https://github.com/LilyRL/sge/tree/master/examples">examples</a> if you
		prefer.
	</p>

	It's got:

	<ul>
		<li>2D and 3D</li>
		<li>Physics</li>
		<li>UI</li>
		<li>Multiplayer</li>
		<li>Advanced, pixel perfect shape rendering</li>
		<li>Post processing effects</li>
		<li>Much more</li>
	</ul>
</Project>
