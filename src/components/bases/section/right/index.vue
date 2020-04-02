<template>
  <aside class="right-section"
         :style="'width:' + width + 'px;min-width: width' ">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'RightSection',

  props: {
    width: {
      type: Number,
      default: 240
    }
  }
}
</script>

<style lang="scss" scoped>
.right-section {
  margin-left: 20px;
  background-color: #fff;
}
@media (max-width: 960px) {
  .right-section {
    display: none;
  }
}
</style>
