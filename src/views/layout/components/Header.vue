<template>
	<!-- <div id="nav">
	  <router-link to="/">首页</router-link> |
	  <router-link to="/photo">图片集</router-link> |
	  <router-link to="/about">关于我</router-link> |
	  <router-link to="/tags">标签</router-link> 
	</div> -->
	<b-navbar toggleable="md" type="dark" variant="primary" >

	

	  <b-navbar-brand href="#">lxs24sxl</b-navbar-brand>

	  <b-collapse is-nav id="nav_collapse">

	    <b-navbar-nav  class="ml-auto" right>
	      <b-nav-item>
	      	<router-link style="color: #fff" to="/">首页</router-link>
	      </b-nav-item>
	      <b-nav-item href="/photo" disabled>
	      	<router-link to="/photo">图片集</router-link>
	      </b-nav-item>
	      <b-nav-item href="/about">
	      	<router-link to="/about">关于我</router-link>
	      </b-nav-item>
	      <!-- <b-nav-item href="/tags"> -->
	      	<!-- <router-link to="/tags">标签</router-link> -->
	      	  <b-nav-item-dropdown right>
	      	    <!-- Using button-content slot -->
	      	    <template slot="button-content">
	      	      <em><router-link to="/tags">标签</router-link></em>
	      	    </template>
	      	    <b-dropdown-item href="#">javascript</b-dropdown-item>
	      	    <b-dropdown-item href="#">webpack</b-dropdown-item>
	      	  </b-nav-item-dropdown>
	      <!-- </b-nav-item> -->
	    </b-navbar-nav>

	    <!-- Right aligned nav items -->
	    <!-- <b-navbar-nav class="ml-auto"> -->

	      <!-- <b-nav-form>
	        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
	        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
	      </b-nav-form> -->
<!-- 
	      <b-nav-item-dropdown text="Lang" right>
	        <b-dropdown-item href="#">EN</b-dropdown-item>
	        <b-dropdown-item href="#">ES</b-dropdown-item>
	        <b-dropdown-item href="#">RU</b-dropdown-item>
	        <b-dropdown-item href="#">FA</b-dropdown-item>
	      </b-nav-item-dropdown>

	      <b-nav-item-dropdown right> -->
	        <!-- Using button-content slot -->
	      <!--   <template slot="button-content">
	          <em>User</em>
	        </template>
	        <b-dropdown-item href="#">Profile</b-dropdown-item>
	        <b-dropdown-item href="#">Signout</b-dropdown-item>
	      </b-nav-item-dropdown>
	    </b-navbar-nav> -->

	  </b-collapse>
	  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
	</b-navbar>

	<!-- navbar-1.vue -->
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			
		}
	}
}
</script>

<style lang="scss" scoped>
// #nav {
  // padding: 30px;
  // a {
  //   font-weight: bold;
  //   color: #2c3e50;
  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
// }

</style>