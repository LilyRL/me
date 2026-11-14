<script lang="ts">
	import { onMount } from 'svelte';
	import Faller from './Faller.svelte';

	let count = $state(0);

	onMount(() => {
		count = Math.round((window.innerWidth * window.innerHeight) / 100000);
	});

	const fallers = $derived(Array.from({ length: count }, (_, index) => index));
</script>

{#each fallers as id (id)}
	<Faller />
{/each}
