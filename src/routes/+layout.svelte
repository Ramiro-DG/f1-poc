<script lang="ts">
	const imgURL = new URL('../images/F1.png', import.meta.url).href
	export let data
	const nextRace = data.MRData.RaceTable.Races[0]
</script>

<nav class="navbar is-fixed-top" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src={imgURL} width="112" height="28" alt="Formula 1 Logo" />
		</a>
	</div>

	<div id="navbarBasic" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" href="/champions"> Drivers Champions </a>
			<a class="navbar-item" href="#"> Constructors Champions </a>

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
				<span class="button is-static is-danger is-outlined">
					{@html `<u><strong>Next Race:</strong></u> &nbsp; Round ${nextRace.round} - ${nextRace.raceName} - ${nextRace.date} `}
				</span>
			</div>
		</div>
	</div>
</nav>

<slot />
