<script>
	import IssueRow from '$lib/IssueRow.svelte';
</script>

<form>
	<input type="search" placeholder="Search" />
</form>
<ul>
	<IssueRow number={10} type="bug" title="jack5079.tk domain has expired" />
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
</style>
