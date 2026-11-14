<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		bg,
		right = false,
		image,
		children
	}: {
		bg: string;
		right?: boolean;
		image?: Snippet;
		children?: Snippet;
	} = $props();
</script>

<div class="panel-row" class:right>
	<div class="panel" style="--panel-bg: url({bg})">
		<div class="panel-inner">
			{#if image}
				<div class="panel-image">{@render image()}</div>
			{/if}

			{#if children}
				<div class="panel-body">{@render children()}</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.panel-row {
		display: flex;
		width: 100%;
	}

	.panel-row.right {
		justify-content: flex-end;
	}

	.panel {
		color: white;
		font-size: 1.2em;
		width: fit-content;
		max-width: 1000px;
		padding: 20px;
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			var(--panel-bg);
		background-repeat: repeat;
		background-size: 200px;
	}

	.panel-inner {
		display: flex;
	}

	.panel-image {
		flex: none;
	}

	.panel-image :global(img) {
		max-width: 100%;
	}

	.panel-body {
		min-width: 0;
		line-height: 1.15;
	}

	.panel-body :global(p) {
		margin: 1em 0;
	}

	.panel-body :global(ul) {
		list-style: disc outside;
		margin: 1em 0;
		padding-left: 40px;
	}

	.panel-body :global(ol) {
		list-style: decimal outside;
		margin: 1em 0;
		padding-left: 40px;
	}

	.panel-body :global(li) {
		margin: 0.25em 0;
	}

	.panel-body :global(a) {
		color: #00ccff;
	}

	@media screen and (max-width: 1200px) {
		.panel-row {
			display: block;
		}

		.panel {
			width: auto;
		}

		.panel-inner {
			display: block;
		}
	}
</style>
