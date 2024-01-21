<script>
	import { page } from "$app/stores"
	import "$lib/mocha.css"
	import Header from "./Header.svelte"
</script>

<div class="container">
	<Header />
	<main>
		<slot />

		<dialog id="post" popover="auto">
			<form>
				<img
					src="https://wavesmiley.com/wavesmiley.gif"
					alt="wave smiley"
					style:width="100%"
					style:padding="1ch"
					style:border-radius="20px"
					style:overflow="hidden" />
			</form>
		</dialog>
	</main>
	{#if $page.data.footer !== false}
		<footer>
			<nav>Pretend I'm the notif embed</nav>
		</footer>
	{/if}
</div>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
	}
	dialog {
		border-radius: 1ch;
		width: 600px;
		background: var(--surface0);
		border: solid 1px var(--surface1);
		box-sizing: border-box;
	}
	.container {
		gap: 1ch;
		display: grid;
		grid-template-columns: 285px 600px 285px;
		max-width: 1200px;
		margin-inline: auto;
		padding-top: 10px;
		min-height: 100%;
	}
	footer {
		position: sticky;
		top: 10px;
		height: max-content;
	}
	main {
		padding: 1ch;
		background: var(--surface0);
	}
</style>
