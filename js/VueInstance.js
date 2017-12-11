
const project = new Vue ({
	el: "#project",
	data: {},
	router,
	
	components: {
		FirstComponent,
		SecondComponent,
		ThirdComponent
	},
	template: `
		<div>
			<header>
				<nav class="nav">
					<router-link to="/first">First</router-link>
					<router-link to="/second">Second</router-link>
					<router-link to="/third">Third</router-link>
				</nav>
			</header>
			<div class="inform">
				<router-view></router-view>
			</div>
		</div>
	`

})