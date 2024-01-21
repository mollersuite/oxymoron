<div class="circles" aria-hidden inert>
	<svg height="300" viewBox="0 0 173.8 275.72">
		<path
			d="m100.289 163.499c-18.3408.76763-35.119 10.4452-44.9885 25.9349-13.3786 21.055-11.2677 48.4154 5.18153 67.1949 16.4492 18.7247 43.3162 24.3722 65.9338 13.8173 3.50916-1.6175 5.04441-5.81204 3.3995-9.3212-1.64492-3.50916-5.81205-5.01701-9.32121-3.3995-16.9701 7.95044-37.1477 3.72848-49.4846-10.363-12.3643-14.0641-13.9544-34.6255-3.86557-50.3893 10.034-15.8186 29.3344-23.0563 47.2914-17.82 17.9844 5.23632 30.3488 21.7129 30.3488 40.4376-.0274.0823-.0274.19191 0 .27415v6.74417c0 2.52221-1.34335 4.79769-3.50916 6.05879-2.19323 1.26111-4.85252 1.26111-7.01832 0-2.19323-1.23369-3.53658-3.56399-3.50916-6.05879v-7.01832c0-15.4348-12.6659-28.0733-28.0733-28.0733-15.4348 0-28.0733 12.6384-28.0733 28.0733 0 15.4074 12.6385 28.0733 28.0733 28.0733 7.3199 0 13.9544-2.93344 18.9714-7.56663 1.56268 1.86424 3.42691 3.48175 5.59273 4.74285 6.49743 3.7559 14.5301 3.7559 21.055 0 6.49743-3.7559 10.5001-10.7194 10.5275-18.2312v-7.01832c-.0274-24.9479-16.504-46.9076-40.4376-53.9259-5.89429-1.69975-11.9805-2.43996-18.0941-2.16581zm2.38514 42.0551c7.81338 0 14.0367 6.19586 14.0367 14.0366 0 7.81337-6.22328 14.0366-14.0367 14.0366-7.84076 0-14.0366-6.22328-14.0366-14.0366 0-7.84077 6.19588-14.0366 14.0366-14.0366z" />
		<circle cx="37.13" cy="26.43" r="21.6" />
		<circle cx="127.16" cy="46.64" r="46.65" />
		<circle cx="34.62" cy="117.87" r="34.62" />
		<circle cx="119.78" cy="130.68" r="21.6" />
	</svg>
	<div class="circle1" />
	<div class="circle2" />
	<div class="circle3" />
</div>

<style>
	@keyframes fadein {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.circles {
		pointer-events: none;
		user-select: none;
		animation-name: fadein;
		animation-duration: 0.3s;
		animation-delay: 1.8s;
		animation-fill-mode: backwards;
		animation-timing-function: ease-out;

		position: fixed;
		right: 0;
		bottom: 50%;
		transform: translateY(50%);
		width: 500px;
		height: 500px;
		overflow: visible;
		z-index: -5;
	}
	@keyframes circle1Path {
		0% {
			top: 50%;
			left: 50%;
			width: 5%;
			height: 5%;
			opacity: 0.5;
		}

		50% {
			top: 0;
			left: 45%;
			width: 60%;
			height: 60%;
			opacity: 1;
		}

		100% {
			top: 50%;
			left: 50%;
			width: 5%;
			height: 5%;
			opacity: 0.5;
		}
	}

	@keyframes circle2Path {
		0% {
			top: 40%;
			left: 45%;
			width: 15%;
			height: 15%;
		}

		50% {
			top: 37%;
			left: -10%;
			width: 80%;
			height: 80%;
		}

		100% {
			top: 40%;
			left: 45%;
			width: 15%;
			height: 15%;
		}
	}

	@keyframes circle3Path {
		0% {
			top: 30%;
			left: 30%;
			width: 25%;
			height: 25%;
		}

		50% {
			top: -50%;
			left: -20%;
			width: 120%;
			height: 120%;
		}

		100% {
			top: 30%;
			left: 30%;
			width: 25%;
			height: 25%;
		}
	}

	.circles svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 200px;
		z-index: 5;
	}

	.circle1 {
		position: absolute;
		animation: circle1Path 15s infinite;
		border-radius: 100%;
	}

	.circle2 {
		position: absolute;
		animation: circle2Path 20s infinite;
		border-radius: 100%;
	}

	.circle3 {
		position: absolute;
		animation: circle3Path 30s infinite;
		border-radius: 100%;
	}
	.circles div {
		background: radial-gradient(50% 50% at 50% 50%, var(--text) 0%, transparent 100%);
	}
	.circles svg {
		fill: var(--base);
	}
	@media (max-width: 1280px), (prefers-reduced-motion) {
		.circles {
			display: none;
		}
	}
</style>
