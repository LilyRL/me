<script lang="ts">
	import Fly from './Fly.svelte';

	let { count = 10 }: { count?: number } = $props();

	const flies = $derived(Array.from({ length: count }, (_, index) => index));
</script>

{#each flies as id (id)}
	<Fly />
{/each}
