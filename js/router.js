

const router = new VueRouter({
	routes: [
		{
			path: "/first",
			component: FirstComponent,
			props: {name: "First"},
			children:[
				{
					path:"firstChild",
					component: ChildComponent1,
					props:{name: "name1"}
				},
				{
					path:"secondChild",
					component: ChildComponent1,
					props: {name: "name2"}
				}
			]
		},
		{
			path: "/second",
			component: SecondComponent,
			props: {name: "Second"}
		},
		{
			path: "/third",
			component: ThirdComponent,
			props: {name: "Third"}
		},
	]
})

