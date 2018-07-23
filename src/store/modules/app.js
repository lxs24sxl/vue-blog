const app = {
	state: {
		title: "林晓舜的博客-首页",
		email: "1001931638@139.com",
		wechat: "lxs24sxl"
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