<template>
  <div class="left-section flex-auto">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LeftSection'
}
</script>

<style lang="scss" scoped>
.flex-auto {
  flex: 1 0 auto;
  background-color: #fff;
}
</style>
