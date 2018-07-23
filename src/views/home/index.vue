<template>
  <div class="home">
    <img src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {getInit} from '@/api/app';
export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
  	// getInit().then( res => {
  	// 	console.log("res");
  	// }).catch( err => {
  	// 	console.log( err);
  	// });
  }
};
</script>
