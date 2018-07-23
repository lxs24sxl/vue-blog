<template>
	<div class="containner">
		<b-navbar toggleable="md" :type="isShowNav && bannerInfo.isShowBanner? 'light': 'dark'" variant="white" :class="{'xs-navbar': true, 'default': !bannerInfo.isShowBanner, 'fixed': isFixed}">
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
		  <b-navbar-toggle 
		  	@click.native="toggleNav" 
		  	target="nav_collapse">
		  </b-navbar-toggle>
		  <div :class="{'xs-nav-bg': true, 'hide': !isShowNav}"></div>
		</b-navbar>
		<!-- navbar-1.vue -->

		<div class="banner-wrapper" :style="{backgroundImage: 'url('+bannerInfo.bgImg+')', display: bannerInfo.isShowBanner?'block':'none' }">
			<div :class="{'site-header': true, 'small': bannerInfo.size === 'small'}">
				<h1>{{bannerInfo.title}}</h1>
				<span>{{bannerInfo.subTitle}}</span>
			</div>
		</div>
	</div>
	
</template>

<script>
import { mapGetters } from 'vuex';
let timer;

export default {
	name: "Header",
	data() {
		return {
			isShowNav: false,
			scroll: '',
			isFixed: false
		}
	},
	computed: {
		...mapGetters([
			'bannerInfo'
		]),
	},
	methods: {
		toggleNav() {
			this.isShowNav = !this.isShowNav;
		},
		scrollEvent() {
			let that = this;
			if ( timer ) {
				clearTimeout( timer );
			}
			timer = setTimeout( function () {
				that.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				console.log(that.scroll)
				if ( that.scroll >= 96 ) {
					that.isFixed = true;
				} else {
					that.isFixed = false;
				}
			}, 150)
		},
		addHandler() {
			return document.body.addEventListener ?
				function ( target, eventType, handler ) {
					target.addEventListener(eventType, handler, false);
				}:
				function ( target, eventType, handler ) {
					target.attachEvent( "on" + eventType, handler );
				};
		},
		removeHandler() {
			return document.body.removeEventListener ?
				function ( target, eventType, handler ) {
					target.removeEventListener(eventType, handler, false);
				}:
				function ( target, eventType, handler ) {
					target.detachEvent( "on" + eventType, handler );
				};
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scrollEvent);
	}
}
</script>

<style lang="scss" scoped>
.banner-wrapper {
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	.site-header {
		padding: 150px 0;
		color: #fff;
		h1 {
			font-weight: bold;
			font-size: 3rem;
		}
	}
	.site-header.small {
		padding: 100px 0;
	}
}
</style>