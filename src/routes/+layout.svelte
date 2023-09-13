<script lang="ts">
	const imgURL = new URL('../images/F1.png', import.meta.url).href
	export let data
	const nextRace = data.MRData.RaceTable.Races[0]
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src={imgURL} width="112" height="28" alt="Formula 1 Logo" />
		</a>
	</div>

	<div id="navbarBasic" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" href="/season"> Seasons </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<p class="navbar-link">More</p>

				<div class="navbar-dropdown">
					<a class="navbar-item" href="about:blank" target="_blank">
						Github Repo
					</a>
				</div>
			</div>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<p>
					{@html `<u><strong>[!WIP] Next Race:</strong></u> Round ${
						nextRace.round
					} - ${nextRace.raceName} - ${new Date(nextRace.date).toDateString()}`}
				</p>
			</div>
		</div>
	</div>
</nav>

<slot />
