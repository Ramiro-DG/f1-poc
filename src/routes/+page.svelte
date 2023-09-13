<script>
	export let data
	const standingsDriver = data.MRData.StandingsTable.StandingsList[0]
	console.log(standingsDriver)
</script>

<div class="is-6">
	<h1 class="is-center">Driver Standings</h1>
	<!-- 
		<p>Season {standingsDriver.season}</p>
	-->
</div>

<table class="table is-striped">
	<!-- 
		<p>Round {standingsDriver.round}</p>
	-->
	<thead>
		<tr>
			<th>Position</th>
			<th>Driver</th>
			<th>Constructor</th>
			<th>Points</th>
		</tr>
	</thead>
	<tbody />
</table>
