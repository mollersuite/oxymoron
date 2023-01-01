<header>
	<nav>
		<a href="/">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 275.72" height="20">
				<g transform="translate(-14.71 -21.92)" fill="white">
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
		/
		<a href="https://luau.ml">
			<svg
				height="20"
				viewBox="0 0 15 15"
				fill="#ff4539"
				style="background:white;padding:5px"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="m 12,11 v 3 h 3 v -3 z" />
				<path d="m 8,11 v 3 h 3 v -3 z" />
				<path d="m 0,11 v 1.5 L 1.5,14 H 7 v -3 z" />
				<path d="m 9.6230469,7 v 3 H 12.623047 V 7 Z" />
				<path d="M 3.5,0 2,1.5 V 3 10 H 7 9 V 6 h 3 V 3 h 2 V 1.5 L 12.5,0 Z" />
			</svg>
			<span>Luau.ml</span>
		</a>

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
		grid-template:
			'header header' 50px
			'sidebar main' 1fr / 200px 1fr;
	}
	@media (max-width: 600px) {
		:global(body) {
			display: block;
		}
	}
	header {
		background: black;
		display: flex;
		justify-content: stretch;
		padding-inline: 1ch;
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
	}
	nav a:hover {
		background: rgba(255, 255, 255, 0.1);
	}
	nav > a > svg {
		aspect-ratio: 1 / 1;
		border-radius: 5px;
	}
</style>
