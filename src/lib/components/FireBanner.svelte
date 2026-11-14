<script lang="ts">
	import fire from '../assets/fire.gif';
</script>

<div
	class="sticky-bottom-banner"
	style="--fire-bg: url({fire})"
	aria-hidden="true"
></div>

<style>
	.sticky-bottom-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: var(--fire-height);
		z-index: 9999;

		background-image: var(--fire-bg);
		background-repeat: repeat-x;
		background-position: bottom center;
		background-size: auto var(--fire-height);
	}
</style>
