<script lang="ts">
	import { onMount } from 'svelte'

	let fullList: any
	let usedList: any

	onMount(async () => {
		const resp = await fetch(
			'http://ergast.com/api/f1/driverStandings/1.json?limit=100'
		)
		const asyncData = await resp.json()
		fullList = asyncData.MRData.StandingsTable.StandingsLists
	  usedList = fullList
	})


	let searchTerm=""
	$:{
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

<div class="container is-flex is-justify-content-center p-3">
	{#if !fullList}
		<progress class="is-centered progress is-danger" max="100">30%</progress>
	{:else}
		<div class="columns">
			<div class="column is-narrow">
				<h1 class="title is-2">Every F1 Drivers Champion</h1>
				<div class="box">
					<p class="subtitle">Search for a driver</p>
					<input
						bind:value={searchTerm}
						type="text"
						class="input is-primary"
						placeholder="Sebastian Vettel"
					/>
				</div>
			</div>
			<div class="column is-fullwidth" />
			{#if usedList.length === 0}
				<div class="notification is-danger is-fullwidth">
					<strong> No results found </strong>
				</div>
			{:else}
				<table class="table is-centered is-striped">
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
		</div>
	{/if}
</div>
