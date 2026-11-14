<script lang="ts">
	import { onMount } from 'svelte';
	import snowflake from '../assets/snowflake.png';
	import pizza from '../assets/pizza.png';

	let element = $state<HTMLImageElement>();
	let sprite = $state(pizza);

	onMount(() => {
		if (!element) return;

		sprite = Math.random() < 0.5 ? snowflake : pizza;

		let x = Math.random() * window.innerWidth;
		let y = Math.random() * window.innerHeight;
		let rotation = Math.random() * 360;
		let frame = 0;

		function update() {
			rotation += 3;
			y += 1;

			if (y > window.innerHeight + 60) {
				y = -60;
				x = Math.random() * window.innerWidth;
			}

			element!.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
			frame = requestAnimationFrame(update);
		}

		update();

		return () => cancelAnimationFrame(frame);
	});
</script>

<img bind:this={element} src={sprite} alt="" class="faller" />

<style>
	.faller {
		position: fixed;
		left: 0;
		top: 0;
		width: 30px;
		will-change: transform;
		pointer-events: none;
		z-index: 10000;
	}
</style>
