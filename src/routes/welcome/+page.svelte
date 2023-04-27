<script>
	import { enhance } from "$app/forms"
	import Circles from "./Circles.svelte"
	import startup from "./startup.ogg?url"
</script>

<svelte:head>
	<title>Welcome</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<audio autoplay src={startup} />

<form method="POST" use:enhance>
	<h1>A couple of things before we get started</h1>
	<ul>
		<li>
			This is in pre-alpha. Please backup your data regularly, and do not use Oxymoron in
			production.
		</li>
		<li>
			Oxymoron is on the Fediverse. There is no authority here, which means all blue ticks are
			fake; please verify organizations using their official websites.
		</li>
		<li>
			Oxymoron is actually on the IndieWeb, and uses Bridgy Fed for bridging to the Fediverse,
			as the real thing is very unoptimized, in fact impossible for serverless platforms such
			as Vercel or Cloudflare Workers.
			<br />
			So before you begin, ask yourself if you trust Ryan Barrett, someone I had never heard of
			prior to writing this sentence.
		</li>
		<li>
			Oxymoron is self-hosted. This means even if we implement an image proxy, your IP address
			will appear in the logs of the instances you interact with. Most of them aren't
			assholes, though, so you should be fine.
		</li>
	</ul>
	<button>Continue</button>
	<a href="/lag">click me</a>
</form>

<Circles />

<svg
	height="300"
	version="1.1"
	viewBox="0 0 3.3357899 5.2916665"
	xmlns="http://www.w3.org/2000/svg"
	class="intro">
	<g fill="#6acb5d">
		<ellipse cx=".71260417" cy=".50740772" rx=".41455045" ry=".41452062" />
		<ellipse cx="2.4404762" cy=".89524996" rx=".8953138" ry=".89524937" />
		<ellipse class="middle" cx=".66443229" cy="2.2622149" rx=".66443217" ry=".66438437" />
		<ellipse class="middle" cx="2.2988367" cy="2.5080464" rx=".41455045" ry=".41452062" />
		<path
			d="m1.9248978 3.1377972c-.3520125.0147389-.674032.2004843-.8634547.4977874-.25677356.4041233-.21625962.9292726.0994499 1.2897211.3157055.3593946.8313577.4677916 1.265454.2652045.0673499-.0310477.0968098-.1115568.0652399-.1789078-.03157-.0673551-.1115519-.0963029-.1788998-.0652452-.3257034.1525978-.7129678.0715547-.9497474-.1989044-.2373057-.2699421-.2678236-.6640661-.0741899-.9671588.1925807-.3036177.5630091-.4425355.9076535-.3420319.3451725.1005066.5824771.4167534.5824771.7761489-.000509.0016-.000509.0037 0 .0053v.1294445c0 .048396-.02577.092093-.06735.1162915-.04209.024208-.09314.024208-.1347018 0-.04209-.023678-.06788-.068405-.06735-.1162915v-.1347075c0-.2962512-.2430936-.5388303-.5388051-.5388303-.2962365 0-.5388032.2425791-.5388032.5388303 0 .2957253.2425667.5388304.5388032.5388304.1404888 0 .2678246-.056306.3641144-.1452323.03.035777.06577.066825.1073438.091043.1247028.072095.2788726.072095.4041024 0 .124704-.0720944.2015259-.2057446.2020529-.349925v-.1347071c-.00051-.4788438-.3167585-.9003298-.7761108-1.0350379-.1131278-.0326276-.2299386-.0468365-.3472754-.0415669zm.04578.8071936c.1499608 0 .2694026.1189223.2694026.2694162 0 .150494-.1194418.2694152-.2694026.2694152-.1504858 0-.2694016-.1189212-.2694016-.2694152 0-.1504939.1189158-.2694162.2694016-.2694162z" />
	</g>
</svg>

<style>
	button {
		background-color: var(--surface0);
		border-color: var(--surface1);
		border-radius: 1ch;
		border-style: solid;
		border-width: 1px;
		color: var(--text);
		cursor: pointer;
		font-weight: bold;
		width: max-content;
		padding-inline: 2ch;
		padding-block: 1ch;
		box-sizing: border-box;
		transition: background-color 0.1s ease, transform 0.2s ease;
	}
	button:hover {
		background-color: var(--surface1);
	}
	button:active {
		background-color: var(--surface2);
		transform: translateY(3px);
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-0.3px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes fadeout {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			display: none;
			visibility: hidden;
		}
	}
	svg.intro {
		overflow: visible;
		animation-name: fadeout;
		animation-duration: 0.3s;
		animation-delay: 1.5s;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-height: 50vmin;
		height: auto;
	}
	form {
		animation-name: fadeout;
		animation-duration: 0.3s;
		animation-delay: 1.8s;
		animation-fill-mode: backwards;
		animation-direction: reverse;
		animation-timing-function: ease-out;
	}
	form {
		font-family: sans-serif;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
		max-width: 800px;
		margin: 10vw;
		gap: 1ch;
	}

	.intro path,
	.intro ellipse {
		animation: bounce 1s ease-in-out;
	}
	.intro .middle {
		animation-delay: 0.1s;
	}
	.intro path {
		animation-delay: 0.2s;
	}
</style>
