<script>
	import top from "./top.png?url"
	import bottom from "./bottom.png?url"
	import center_left from "./center_left.gif?url"
	import center_right from "./center_right.gif?url"
	export let level = 0
</script>

<div>
	<img alt="cheese-o-meter" height="46" src={top} width="300" role="heading" aria-level="1" />
	<ul>
		<img alt="" height="34" src={center_left} width="24" />
		{#each Array.from({ length: 9 }) as _, i}
			<li>
				<a
					class="track"
					href="/level_{i + 1}"
					aria-current={level === i + 1 ? "page" : undefined}>level {i + 1}</a>
			</li>
		{/each}
		<img alt="" height="34" src={center_right} width="24" />
	</ul>
	<img alt="" height="19" src={bottom} width="300" />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
	ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style-type: none;
		flex-direction: row;
	}
	.track {
		cursor: pointer;
		content: "";
		background: url(./center_off.gif);
		display: block;
		width: 28px;
		height: 34px;
		user-select: all;
		color: transparent;
	}
	.track:hover,
	.track:focus-visible,
	ul:not(:has(:hover, :focus-visible)) .track[aria-current="page"] {
		background: url(./center_on.gif);
	}
</style>
