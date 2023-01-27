<script>
	import { dev } from "$app/environment"
	import { enhance } from "$app/forms"
	import Circles from "./Circles.svelte"
	import generate from "./etcetars"
	import Footer from "./Footer.svelte"
	import startup from "./startup.ogg?url"
	
	let username = ""
	let pfp = "https://via.placeholder.com/100"

	/** @type {FileList} */
	let submitted_pfp

	$: if (!submitted_pfp?.length) {
		generate(username).then(svg => {
			pfp = "data:image/svg+xml;base64," + btoa(svg)
		})
	} else {
		pfp = URL.createObjectURL(submitted_pfp[0])
	}
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

{#if !dev}
	<audio autoplay src={startup} />
{/if}

<form method="POST" use:enhance>
	<h1>Who are you?</h1>
	<label style="cursor: pointer" class="pfp">
		<input
			type="file"
			name="profile-picture"
			accept="image/*"
			bind:files={submitted_pfp}
			style="display: none" />
		<img src={pfp} alt="Profile" height="100" width="100" style="border-radius: 10px" />
	</label>
	<input
		type="text"
		name="display-name"
		placeholder="Display name"
		aria-label="Display name"
		required
		bind:value={username} />
	<textarea
		name="bio"
		placeholder="Bio - HTML, @mentions, #tags, and /internals supported!"
		aria-label="Bio"
		rows="10"
		cols="30" />
	<label>
		Read-only mode
		<input type="checkbox" name="read-only" />
	</label>
	<button>
		<span>Continue</span>
	</button>
</form>

<Circles />
<Footer />
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
		max-width: 90%;
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
		max-width: max-content;
		text-align: center;
		margin: auto;
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
