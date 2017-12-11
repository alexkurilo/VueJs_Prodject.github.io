
const FirstComponent = ({
	props: {
		name:{
			
		}
	},
	template:
	`
		<div>
			<aside id="leftAside">
				<div class= "leftAsideButton">
					<router-link to="/first/firstChild" >
						firstChild
					</router-link>
				</div>
				<div class= "leftAsideButton">
					<router-link to="/first/secondChild" >
						secondChild
					</router-link>
				</div>
			</aside>
			<router-view></router-view>
		</div>
	`
})

const SecondComponent = ({
	/*props: {
		name:{
			type: String,
			default: "good boy",
		}
	},*/
	/*computed: {
		pictureCounter: function () {
			return  store.state.pictureCounter
		},
		animName: function () {
			return store.state.animName
		}
	},*/
	methods: {
		nextPicture: () => store.commit('latePicture'),
		previosPicture: () => store.commit('earlyPicture'),
	},
	components: {
		'childComponent2': ChildComponent2
	},
	template:
	`
		<center>
			<div class="second">
				<button id="leftbutton" @click="previosPicture">
					<i class="ion-android-arrow-dropleft-circle"></i>
				</button>
				<childComponent2>
				</childComponent2>						
				<button id="rightbutton" @click="nextPicture">
					<i class="ion-android-arrow-dropright-circle"></i>
				</button>
			</div>
		</center>
	`
})

const ThirdComponent = ({
	props: {
		name:{
			/*type: String,
			default: "good boy",*/
		}
	},

	template:
	`
		<div class="third">
			<img src="http://1.bp.blogspot.com/-tSbl68z2T-8/UK375ueXbyI/AAAAAAAAC-s/TVrdSzIPgsE/s1600/the-end.jpg"   >
		</div>
	`
})
