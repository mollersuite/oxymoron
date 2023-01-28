<div class="circles" aria-hidden>
	<svg
		height="300"
		version="1.1"
		viewBox="0 0 3.3357899 5.2916665"
		xmlns="http://www.w3.org/2000/svg">
		<ellipse cx=".71260417" cy=".50740772" rx=".41455045" ry=".41452062" />
		<ellipse cx="2.4404762" cy=".89524996" rx=".8953138" ry=".89524937" />
		<ellipse class="middle" cx=".66443229" cy="2.2622149" rx=".66443217" ry=".66438437" />
		<ellipse class="middle" cx="2.2988367" cy="2.5080464" rx=".41455045" ry=".41452062" />
		<path
			d="m1.9248978 3.1377972c-.3520125.0147389-.674032.2004843-.8634547.4977874-.25677356.4041233-.21625962.9292726.0994499 1.2897211.3157055.3593946.8313577.4677916 1.265454.2652045.0673499-.0310477.0968098-.1115568.0652399-.1789078-.03157-.0673551-.1115519-.0963029-.1788998-.0652452-.3257034.1525978-.7129678.0715547-.9497474-.1989044-.2373057-.2699421-.2678236-.6640661-.0741899-.9671588.1925807-.3036177.5630091-.4425355.9076535-.3420319.3451725.1005066.5824771.4167534.5824771.7761489-.000509.0016-.000509.0037 0 .0053v.1294445c0 .048396-.02577.092093-.06735.1162915-.04209.024208-.09314.024208-.1347018 0-.04209-.023678-.06788-.068405-.06735-.1162915v-.1347075c0-.2962512-.2430936-.5388303-.5388051-.5388303-.2962365 0-.5388032.2425791-.5388032.5388303 0 .2957253.2425667.5388304.5388032.5388304.1404888 0 .2678246-.056306.3641144-.1452323.03.035777.06577.066825.1073438.091043.1247028.072095.2788726.072095.4041024 0 .124704-.0720944.2015259-.2057446.2020529-.349925v-.1347071c-.00051-.4788438-.3167585-.9003298-.7761108-1.0350379-.1131278-.0326276-.2299386-.0468365-.3472754-.0415669zm.04578.8071936c.1499608 0 .2694026.1189223.2694026.2694162 0 .150494-.1194418.2694152-.2694026.2694152-.1504858 0-.2694016-.1189212-.2694016-.2694152 0-.1504939.1189158-.2694162.2694016-.2694162z" />
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
		background: radial-gradient(50% 50% at 50% 50%, var(--mocha-text) 0%, transparent 100%);
	}
	.circles svg {
		fill: var(--mocha-base);
	}
	@media (max-width: 1280px) {
		.circles {
			display: none;
		}
	}
	@media (prefers-color-scheme: light) {
		.circles svg {
			fill: var(--latte-base);
		}
		.circles div {
			background: radial-gradient(50% 50% at 50% 50%, var(--latte-text) 0%, transparent 100%);
		}
	}
</style>
