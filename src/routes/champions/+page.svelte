<script lang="ts">
	import { onMount } from 'svelte'

	let fullList: any
	let usedList: any
	let searchTerm: String

	onMount(async () => {
		const resp = await fetch(
			'http://ergast.com/api/f1/driverStandings/1.json?limit=100'
		)
		const asyncData = await resp.json()
		fullList = asyncData.MRData.StandingsTable.StandingsLists
		usedList = fullList
	})

	function handleSearch() {
		if (searchTerm === '') usedList = fullList
		else {
			usedList = fullList.filter((entry: any) => {
				return (
					entry.DriverStandings[0].Driver.givenName
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					entry.DriverStandings[0].Driver.familyName
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
				)
			})
		}
	}
</script>

{#if !fullList}
	<p>...waiting</p>
{:else}
	<h1>Every F1 Drivers Champion</h1>
	<p>Search for a driver</p>
	<input
		bind:value={searchTerm}
		type="text"
		class="input is-primary"
		placeholder="Sebastian Vettel"
		on:keypress={(event) => {
			if (event.key === 'Enter') handleSearch()
		}}
	/>
	<table class="table">
		<thead>
			<tr>
				<th>Year</th>
				<th>Driver</th>
				<th>Constructor</th>
				<th>Points</th>
				<th>Wins</th>
			</tr>
		</thead>
		<tbody>
			{#each usedList as entry}
				<tr>
					<td>{entry.season}</td>
					<td>
						{entry.DriverStandings[0].Driver.givenName}
						{entry.DriverStandings[0].Driver.familyName}
					</td>
					<td>{entry.DriverStandings[0].Constructors[0].name}</td>
					<td>{entry.DriverStandings[0].points}</td>
					<td>{entry.DriverStandings[0].wins}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
