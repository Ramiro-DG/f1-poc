<script lang="ts">
	import { onMount } from 'svelte'

	let asyncData: any

	const gimmeData = async () => {
		const resp = await fetch(
			'http://ergast.com/api/f1/driverStandings/1.json?limit=100'
		)
		return await resp.json()
	}

	onMount(async () => {
		asyncData = await gimmeData()
	})
</script>

{#await asyncData}
	<p>...waiting</p>
{:then data}
	<h1>Every F1 Drivers Champion</h1>
	{console.log(data)}
{/await}
