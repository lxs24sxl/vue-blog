import Vue from 'vue'
import Router from 'vue-router'
const _import = require("./_import_" + process.env.NODE_ENV)

import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
	routes: [
		{	
			path: "/",
			component: Layout,
			name: "index",
			redirect: "/index",
			children: [
				{
					path: "index",
					component: _import("index/index")
				}
			]
		},
		{
		  path: "/blogs",
		  component: Layout,
		  redirect: "/blogs/index",
		  name: "blogs",
		  children: [
		  	{
		  		path: "index",
		  		name: "blogsIndex",
		  		component: _import("blogs/index")
		  	}
		  ]
		},
		{
		  path: "/photo",
		  component: Layout,
		  redirect: "/photo/index",
		  name: "photo",
		  children: [
		  	{
		  		path: "index",
		  		name: "photoIndex",
		  		component: _import("photo/index")
		  	}
		  ]
		},
		{
		  path: "/about",
		  component: Layout,
		  redirect: "/about/index",
		  name: "about",
		  children: [
		  	{
		  		path: "index",
		  		name: "aboutIndex",
		  		component: _import("about/index")
		  	}
		  ]
		},
		{
		  path: "/tags",
		  component: Layout,
		  redirect: "/tags/index",
		  name: "tags",
		  children: [
		  	{
		  		path: "index",
		  		name: "tagsIndex",
		  		component: _import("tags/index")
		  	}
		  ]
		},
	]
})