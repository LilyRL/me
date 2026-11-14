<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<p class="disclaimer">{@render children()}</p>

<style>
	.disclaimer {
		text-align: center;
		font-size: 1.5em;
		color: black;
		background-color: yellow;
		padding: 3px;
		margin: 1em 0;
	}
</style>
