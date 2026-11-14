<script lang="ts">
	import happy from '../assets/im_happy.png';
</script>

<div
	class="happiness-divider"
	style="--divider-bg: url({happy})"
	aria-hidden="true"
></div>

<style>
	.happiness-divider {
		--height: 100px;

		height: var(--height);
		margin-top: 30px;
		margin-bottom: 30px;
		background-image: var(--divider-bg);
		background-size: var(--height);
	}
</style>
