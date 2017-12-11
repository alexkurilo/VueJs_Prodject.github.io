var store = new Vuex.Store ({
	state: {
		pictures:[
			{
				url: "http://www.porjati.ru/uploads/posts/2015-04/thumbs/1428137035_zooshop_01.jpg",
			},
			{
				url: "https://s00.yaplakal.com/pics/pics_original/0/4/5/5885540.jpg",
			},
			{
				url: "https://s00.yaplakal.com/pics/pics_original/9/9/3/5885399.jpg",
			},
			{
				url: "http://uploads.neatorama.com/images/posts/416/92/92416/1473039970-0.jpg",
			},
			{
				url: "http://www.porjati.ru/uploads/posts/2015-04/thumbs/1428140038_1242923030_mamals_insects012.jpg",
			},
			{
				url: "https://pbs.twimg.com/media/B0F3J1UIgAAI1zJ.jpg",
			},
			{
				url: "http://www.porjati.ru/uploads/posts/2015-04/thumbs/1428137064_zooshop_11.jpg",
			},
			{
				url: "https://i.imgur.com/OQHJJoB.jpg",
			},
			{
				url: "https://s00.yaplakal.com/pics/pics_original/7/9/4/5887497.jpg",
			},
			{
				url: "https://orig00.deviantart.net/e511/f/2007/175/c/8/phil_the_frogird_by_humandescent.jpg",
			},
		],
		pictureCounter: 0,
		animName: "slide-left",
	},
	mutations:	{
		latePicture: state =>{
			state.animName = "slide-right",
			state.pictureCounter = (state.pictureCounter === (state.pictures.length - 1) ? 0 : (state.pictureCounter + 1))
		},
		earlyPicture: state =>{
			state.animName = "slide-left",
			state.pictureCounter = (state.pictureCounter === 0 ? (state.pictures.length - 1) : (state.pictureCounter - 1))
		}, 
	},
})