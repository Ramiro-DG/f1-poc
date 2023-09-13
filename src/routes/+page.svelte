<script>
	export let data
	const standingsDriver =
		data.driverData.MRData.StandingsTable.StandingsLists[0]
	const standingsConstructor =
		data.constructorData.MRData.StandingsTable.StandingsLists[0]
</script>

<div class="columns p-3">
	<div class="column">
		<!-- TODO center text-->
		<p>Driver Standings</p>

		<table class="table is-striped">
			<thead>
				<tr>
					<th>Position</th>
					<th>Driver</th>
					<th>Nationality</th>
					<th>Constructor</th>
					<th>Points</th>
				</tr>
			</thead>
			<tbody>
				{#each standingsDriver.DriverStandings as driver}
					<tr>
						<td><strong>{driver.position}</strong></td>
						<td>{driver.Driver.givenName} {driver.Driver.familyName}</td>
						<td>{driver.Driver.nationality}</td>
						<td>{driver.Constructors[0].name}</td>
						<td>{driver.points}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="column">
		<p>Constructor Standings</p>
		<table class="table is-striped">
			<thead>
				<tr>
					<th>Position</th>
					<th>Constructor</th>
					<th>Nationality</th>
					<th>Wins</th>
					<th>Points</th>
				</tr>
			</thead>
			<tbody>
				{#each standingsConstructor.ConstructorStandings as constructor}
					<tr>
						<td><strong>{constructor.position}</strong></td>
						<td>{constructor.Constructor.name}</td>
						<td>{constructor.Constructor.nationality}</td>
						<td>{constructor.wins}</td>
						<td>{constructor.points}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
