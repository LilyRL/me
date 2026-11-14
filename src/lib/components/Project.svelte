<script lang="ts">
	import type { Snippet } from 'svelte';
	import Panel from './Panel.svelte';

	let {
		bg,
		right = false,
		image,
		children
	}: {
		bg: string;
		right?: boolean;
		image?: Snippet;
		children: Snippet;
	} = $props();
</script>

<Panel {bg} {right} {image}>
	{@render children()}
</Panel>
