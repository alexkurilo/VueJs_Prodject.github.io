const ChildComponent1 = ({
	props: {
		name:{
			type: String,
			default: "nothing1"
		}
	},
	data: function (){
		return {
			childComponent1: childComponent1,
		}
	},
	computed: {
		selected: function(){
			return this.name
		}
	},
	template:
	`<section class="article">
		<div v-for="item in childComponent1[selected]">
			<h3>{{item.head}}</h3>
			<div class="picText">
				<img :src="item.pict"/>
				<span>{{item.text}}</span>
			</div>
		</div>
    </section>`
})

const ChildComponent2 = ( 'childComponent2', {
	computed: {
		img: () => store.state.pictures[store.state.pictureCounter].url,
		slidershow: () => store.state.animName
	},
	/*mounted: function(){
		return{
			img: this.img,
			slidershow: this.slidershow,
		}
	},*/
	template: 
	`
		<transition :name="slidershow"  mode="out-in">
				<img :src="img" :key="img"   >
		</transition>
	`
})