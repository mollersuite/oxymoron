<header>
	<nav>
		<a href="/" class="root" title="Oxymoron">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 275.72" height="20">
				<g transform="translate(-14.71 -21.92)" fill="#6acb5d">
					<circle cx="51.84" cy="48.35" r="21.6" />
					<circle cx="49.33" class="middle" cy="139.79" r="34.62" />
					<circle cx="134.49" cy="152.6" r="21.6" class="middle" />
					<circle cx="141.87" cy="68.56" r="46.65" />
					<circle cx="117.39" cy="241.5" r="56.14" class="bottom" />
				</g>
			</svg>
		</a>/
		<a href="">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 173.8 275.72"
				height="20"
				style="background: white;padding:5px"
			>
				<g transform="translate(-14.71 -21.92)" fill="black">
					<circle cx="51.84" cy="48.35" r="21.6" />
					<circle cx="49.33" class="middle" cy="139.79" r="34.62" />
					<circle cx="134.49" cy="152.6" r="21.6" class="middle" />
					<circle cx="141.87" cy="68.56" r="46.65" />
					<circle cx="117.39" cy="241.5" r="56.14" class="bottom" />
				</g>
			</svg>
			<span>Etcetera</span>
		</a>
		<!-- /
		<a href="https://luau.ml">
			<span>Note</span>
		</a> -->

		<slot name="nav" />
	</nav>
	<a class="profile" href="/">Jack (@j)</a>
</header>
<slot />

<style>
	:global(body) {
		margin: 0;
		min-height: 100vh;
		display: grid;
		font-family: sans-serif;
		grid-template:
			'header header' 50px
			'main main' 1fr;
		/* 'sidebar main' 1fr / 200px 1fr; */
	}
	@media (max-width: 600px) {
		:global(body) {
			display: block;
		}
	}
	header {
		background: rgba(0, 0, 0, 0.5);
		border-bottom-left-radius: 1ch;
		border-bottom-right-radius: 1ch;
		max-width: 1280px;
		width: 100vw;
		margin: 0 auto;
		display: flex;
		justify-content: stretch;
		padding-inline: 1ch;
		box-sizing: border-box;
		align-items: center;
		gap: 1ch;
		flex-direction: row;
		flex-wrap: wrap;
		grid-area: header;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 1ch;
		flex-direction: row;
		flex-grow: 1;
	}
	nav a {
		display: flex;
		align-items: center;
		gap: 0.5ch;
		padding: 0.5ch;
		padding-inline: 1ch;
		color: white;
		text-decoration: none;
		border-radius: 1ch;
		transition: background 0.2s;
	}
	nav a:hover {
		background: rgba(255, 255, 255, 0.1);
	}
	nav > a > svg {
		aspect-ratio: 1 / 1;
		border-radius: 5px;
	}
	.root:hover svg g {
		transition: fill 0.2s;
	}
	.root:hover svg g {
		fill: white;
	}
</style>
