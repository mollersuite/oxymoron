<script>
	import bg from '$lib/bg-plain.jpg?url';
</script>

<main>
	<form>
		<h1>
			cetera.uk <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 173.8 275.72"
				height="30"
				style="float: right;overflow:visible"
			>
				<g transform="translate(-14.71 -21.92)" fill="#6acb5d">
					<circle cx="51.84" cy="48.35" r="21.6" />
					<circle cx="49.33" class="middle" cy="139.79" r="34.62" />
					<circle cx="134.49" cy="152.6" r="21.6" class="middle" />
					<circle cx="141.87" cy="68.56" r="46.65" />
					<circle cx="117.39" cy="241.5" r="56.14" class="bottom" />
				</g>
			</svg>
		</h1>
		<p>An instance for morons.</p>
		<label>
			Username
			<input type="text" />
		</label>
		<label>
			Password
			<input type="password" />
		</label>
	</form>
	<button>Login</button>
</main>
<div class="bg" style="--bg:url({bg})" aria-hidden />

<style>
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-image: var(--bg);
		background-position: center;
		z-index: -1;
	}
	main {
		padding: 50px;
		box-sizing: border-box;
		width: 400px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%) translateX(-50%);
		left: 50%;
		background: rgba(0, 0, 0, 0.7);
		border-radius: 10px;
	}
	label {
		display: contents;
	}
	label {
		display: flex;
		flex-direction: column;
		gap: 0.5ch;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1ch;
	}
	button {
		margin-top: 3ch;
		width: 100%;
		padding: 1ch;
		background: #6acb5d;
		border: none;
		border-radius: 5px;
		color: black;
		cursor: pointer;
		transition: background 0.1s, transform 0.1s;
	}
	button:hover {
		background: #5abf4f;
		transform: scale(1.05);
	}
	button:active {
		background: #4cb342;
		transform: scale(1);
	}
</style>
