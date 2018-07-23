<template>
	<div class="containner">
		<b-navbar toggleable="md" :type="isShowNav && bannerInfo.isShowBanner? 'light': 'dark'" variant="white" :class="{'xs-navbar': true, 'default': !bannerInfo.isShowBanner}">
			<!-- 标题orLogo -->
		  <b-navbar-brand href="#">lxs24sxl</b-navbar-brand>
		  <!-- 导航栏 -->
		  <b-collapse is-nav id="nav_collapse">

		    <b-navbar-nav  class="ml-auto" right>
		      <b-nav-item href="javscript: void(0);">
		      	<router-link to="/">首页</router-link>
		      </b-nav-item>
		      <b-nav-item href="javscript: void(0);" disabled>
		      	<router-link to="/photo">图片集</router-link>
		      </b-nav-item>
		      <b-nav-item href="javscript: void(0);">
		      	<router-link to="/about">关于我</router-link>
		      </b-nav-item>
		      <b-nav-item-dropdown right>
		        <!-- Using button-content slot -->
		        <template slot="button-content">
		          <em><router-link to="/tags">标签</router-link></em>
		        </template>
		        <b-dropdown-item href="#">javascript</b-dropdown-item>
		        <b-dropdown-item href="#">webpack</b-dropdown-item>
		      </b-nav-item-dropdown>
		    </b-navbar-nav>

		  </b-collapse>
		  <!-- 折叠后的 -->
		  <b-navbar-toggle @click.native="toggleNav" target="nav_collapse"></b-navbar-toggle>
		  <div :class="{'xs-nav-bg': true, 'hide': !isShowNav}"></div>
		</b-navbar>
		<!-- navbar-1.vue -->

		<div class="banner-wrapper" :style="{backgroundImage: 'url('+bannerInfo.bgImg+')', display: bannerInfo.isShowBanner?'block':'none' }">
			<div class="site-heeader">
				<h1>{{bannerInfo.title}}</h1>
				<span>{{bannerInfo.subTitle}}</span>
			</div>
		</div>
	</div>
	
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: "Header",
	data() {
		return {
			isShowNav: false
		}
	},
	computed: {
		...mapGetters([
			'bannerInfo'
		])
	},
	methods: {
		toggleNav() {
			this.isShowNav = !this.isShowNav;
		}
	},
}
</script>

<style lang="scss" scoped>
.banner-wrapper {
	background-size: contain;
	background-attachment: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	.site-heeader {
		padding: 150px 0;
		color: #fff;
	}
}
</style>