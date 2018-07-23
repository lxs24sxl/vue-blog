<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="http://eps.ink/img/bob-icon.png">
  </div>
</template>
<script>
export default {
	data() {
		return {
			bannerInfo: {
				title: "关于林晓舜",
				subTitle: "Email: 1001931638@139.com",
				bgImg: "http://eps.ink/img/post-bg-rwd.jpg",
				isShowBanner: true
			}
		}
	},
	created() {
		this.$store.commit("TOGGLE_BANNER", this.bannerInfo)
	}
}
</script>
<style lang="scss">
	.test {
		height: "20px"
	}
</style>