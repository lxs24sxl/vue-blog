<template>
	<div>
		photo
	</div>
</template>

<script>
export default {
	data() {
		return {
			bannerInfo: {
				title: "",
				subTitle: "",
				bgImg: "",
				isShowBanner: false,
				size: "normal"
			}
		}
	},
	created() {
		this.$store.commit("TOGGLE_BANNER", this.bannerInfo)
	}
}
</script>

