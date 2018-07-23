const app = {
	state: {
		title: "林晓舜的博客-首页",
		email: "1001931638@139.com",
		wechat: "lxs24sxl",
		bannerInfo: {
			title: "林晓舜的博客",
			subTitle: "大人物只是不断进取的小人物",
			bgImg: "http://eps.ink/img/post-bg-rwd.jpg",
		}
	},
	mutations: {
		TOGGLE_TITLE: (state, title) => {
			state.title = title
		}
	},
	actions: {
		ToggleTitle: ({ commit }) => {
			commit("TOGGLE_TITLE")
		}
	}
}
export default app;