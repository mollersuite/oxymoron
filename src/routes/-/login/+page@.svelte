<main>
	<h1>Log in to cetera<wbr />.<wbr />uk</h1>
	<form>
		<label>
			Username
			<input type="text" name="username" required />
		</label>
		<label>
			Password
			<input type="password" name="password" required />
		</label>
		<button type="submit" class="button primary">Log in</button>
	</form>
</main>

<style>
	:global(body, html) {
		height: 100%;
		padding: 0;
		margin: 0;
	}
	:global(body) {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	main {
		width: 100%;
		max-width: 400px;
		margin-inline: auto;
		margin-block: auto;
		text-align: center;
		display: flex;
		align-items: stretch;
		gap: 1ch;
		flex-direction: column;
	}
	form {
		display: contents;
	}
	label {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1ch;
	}
	input {
		max-width: 100vw;
		flex-grow: 1;
		border-bottom-right-radius: 1ch;
		border-top-right-radius: 1ch;
		border: none;
		background: var(--surface0);
		font-family: monospace;
	}

	@media (max-width: 800px) {
		label {
			flex-direction: column;
			align-items: stretch;
			text-align: left;
		}
		input, label {
			font-size: 20px;
		}
		button {
			font-size: x-large;
		}
	}
	button {
		max-width: 100%;
	}
	h1 {
		margin-block-start: 0;
	}
</style>
