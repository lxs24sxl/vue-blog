<template>
	<div>
		tags
	</div>
</template>
<script>
export default {
	data() {
		return {
			bannerInfo: {
				title: "标签",
				subTitle: "hhhhhhhhhhha",
				bgImg: "http://eps.ink/img/tag-bg.jpg",
				isShowBanner: true,
				size: "small"
			}
		}
	},
	created() {
		this.$store.commit("TOGGLE_BANNER", this.bannerInfo)
	}
}
</script>