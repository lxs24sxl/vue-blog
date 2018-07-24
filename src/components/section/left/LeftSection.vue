<template>
	<div class="flex-auto">
		<slot></slot>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.flex-auto {
  flex: 1 0 auto;
  background-color: #fff;
}
</style>
