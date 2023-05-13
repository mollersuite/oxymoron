<script>
	import { navigating } from "$app/stores"
	// import "$lib/mocha.css"
	import "@mollersuite/mocha/theme.css"
</script>

{#if $navigating}
	<div aria-hidden role="none" class="loading" />
{/if}
<slot />

<style>
	div {
		height: 1ch;
		border-radius: 0;
		border: 0;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 5;
		background: linear-gradient(
			to right,
			transparent 0%,
			var(--oxy-accent) 25%,
			transparent 50%
		);
		background-size: 200% 100%;
		animation: progress 3s linear infinite;
	}
	@keyframes progress {
		0% {
			background-position: -100% 0;
		}
		100% {
			background-position: 100% 0;
		}
	}
</style>
