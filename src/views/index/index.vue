<template>
	<div class="index">
			index
	</div>
</template>
<script>
export default {
	data() {
		return {
			bannerInfo: {
				title: "林晓舜的博客",
				subTitle: "大人物只是不断进取的小人物",
				bgImg: "http://eps.ink/img/post-bg-rwd.jpg",
				isShowBanner: true,
				size: "normal"
			}
		}
	},
	created() {
		this.$store.commit("TOGGLE_BANNER", this.bannerInfo)
	}
}
</script>
<style lang="scss" scoped>
.index{
	.container {
		// background-image: url("http://eps.ink/img/post-bg-desk.jpg");
	}
}
</style>