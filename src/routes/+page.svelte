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
				{#each standingsDriver.DriverStandings as { position, Driver, Constructors, points }}
					<tr>
						<td><strong>{position}</strong></td>
						<td>{Driver.givenName} {Driver.familyName}</td>
						<td>{Driver.nationality}</td>
						<td>{Constructors[0].name}</td>
						<td>{points}</td>
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
				{#each standingsConstructor.ConstructorStandings as { position, Constructor, points, wins }}
					<tr>
						<td><strong>{position}</strong></td>
						<td>{Constructor.name}</td>
						<td>{Constructor.nationality}</td>
						<td>{wins}</td>
						<td>{points}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
