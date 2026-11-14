<script lang="ts">
	import { onMount } from 'svelte';
	import flySprite from '../assets/fly.webp';

	let element = $state<HTMLImageElement>();

	onMount(() => {
		if (!element) return;

		const spriteSize = 60;
		const turnSpeed = 0.05;
		const maxSpeed = 3;

		let x = Math.random() * window.innerWidth;
		let y = Math.random() * window.innerHeight;
		let angle = Math.random() * 6.3;
		let targetAngle = 0;
		let currentSpeed = 0;
		let isMoving = false;
		let actionTimer: ReturnType<typeof setTimeout> | undefined;
		let frame = 0;

		function decideNextAction() {
			isMoving = Math.random() > 0.5;

			if (isMoving) {
				currentSpeed = maxSpeed;
				targetAngle = Math.random() * Math.PI * 2;
			} else {
				currentSpeed = 0;
			}

			actionTimer = setTimeout(decideNextAction, 1500 + Math.random() * 1500);
		}

		function update() {
			if (isMoving) {
				let angleDiff = targetAngle - angle;
				angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
				angle += angleDiff * turnSpeed;
			}

			x += Math.cos(angle) * currentSpeed;
			y += Math.sin(angle) * currentSpeed;

			if (x < -spriteSize) {
				x = window.innerWidth;
			} else if (x > window.innerWidth) {
				x = -spriteSize;
			}

			if (y < -spriteSize) {
				y = window.innerHeight;
			} else if (y > window.innerHeight) {
				y = -spriteSize;
			}
		}

		function render() {
			const degrees = angle * (180 / Math.PI) + 90;
			element!.style.transform = `translate(${x}px, ${y}px) rotate(${degrees}deg)`;
		}

		function loop() {
			update();
			render();
			frame = requestAnimationFrame(loop);
		}

		decideNextAction();
		loop();

		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(actionTimer);
		};
	});
</script>

<img bind:this={element} src={flySprite} alt="" class="fly" />

<style>
	.fly {
		position: fixed;
		left: 0;
		top: 0;
		width: 60px;
		will-change: transform;
		pointer-events: none;
		z-index: 9998;
	}
</style>
