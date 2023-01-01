<ul class="sidebar">
	<li>
		<details>
			<summary> src/</summary>
			<ul>
				<li>main.js</li>
			</ul>
		</details>
	</li>
	<li>package.json</li>
	<li>README.md</li>
</ul>
<main>
	<pre>README.md</pre>
	<!-- <dl>
		<dt>Files and folders</dt>
		<dd>
			<ul>
				<li>src</li>
				<li>package.json</li>
				<li>README.md</li>
			</ul>
		</dd>
	</dl>
	<dl>
		<dt>README</dt>
		<dd>
			<h1>Project Mollabox</h1>
			<p>The world's most feature-rich fediverse server.</p>
		</dd>
	</dl> -->
	<h1>Project Mollabox</h1>
	<p>
		Federates notes, articles, photos, videos, and Git repos. And the Android client can double as
		the server.
	</p>
	<h2>Features</h2>
	<ul>
		<li>
			Written in Svelte + SvelteKit, so it won't suffer from <a href="https">the Misskey problem</a>
		</li>
		<li>Somewhat responsive</li>
	</ul>
	<h2>Issues</h2>
	<ul>
		<li>My friend wants me to make this a monoculture, I say no</li>
		<li>ActivityPub is fucking hard</li>
		<li>How do I handle redirects???</li>
		<li>
			The fuck is moderation gonna be like? Already bad enough having to ban assholes on a Mastodon
			instance, how about MALWARE on a oxy instance?
			<ul>
				<li>
					0 chance the Android server will host Git repos by default, no phone can handle CI/CD
				</li>
				<li>
					No public sign-ups. Only invite codes.
					<ul>
						<li>This also solves the issue of e-mail verification</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</main>

<style>
	dt {
		font-weight: bold;
	}
	dd {
		margin-inline-start: 0;
	}
	dd > ul {
		list-style: none;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-left: 0;
		column-count: 3;
	}
	dd > ul > li {
		margin-block-start: 0;
		margin-block-end: 0;
	}
	main {
		grid-area: main;
	}
	.sidebar {
		grid-area: sidebar;
		list-style: none;
		background: black;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-left: 1ch;
		padding-top: 1ch;
	}
	main pre {
		background: #111;
		color: white;
		padding: 1ch;
		margin-block-start: 0;
	}
</style>
