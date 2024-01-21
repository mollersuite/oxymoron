<div>
	<slot />
	<footer>
		Oxymoron, from <a href="https://cetera.uk">
			Etcetera <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 173.8 275.72"
				height="20"
				fill="currentColor">
				<circle cx="37.13" cy="26.43" r="21.6" />
				<circle cx="34.62" cy="117.87" r="34.62" class="middle" />
				<circle cx="119.78" cy="130.68" r="21.6" class="middle" />
				<circle cx="127.16" cy="46.64" r="46.65" />
				<circle cx="102.68" cy="219.58" r="56.14" class="bottom" />
			</svg>
		</a>
	</footer>
</div>

<style>
	div {
		grid-template-rows: 1fr auto;
		gap: 0;
		min-height: 100vh;
		display: grid;
	}
	footer {
		display: block;
		text-align: center;
		border-top: solid 1px var(--surface0);
		padding-block: 1ch;
	}
	svg {
		vertical-align: bottom;
		overflow: visible;
	}
	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-30px);
		}
		100% {
			transform: translateY(0);
		}
	}
	a:hover circle {
		animation: bounce 1s ease-in-out infinite;
	}
	a:hover .middle {
		animation-delay: 0.1s;
	}
	a:hover .bottom {
		animation-delay: 0.2s;
	}
</style>
