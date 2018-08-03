<template>
  <div>
    <aside class="right-sidebar" :style="'width:' + width + 'px;min-width: width' ">
      <slot></slot>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    width: {
      type: Number,
      default: 240
    }
  }
};
</script>

<style lang="scss" scoped>
.right-sidebar {
  margin-left: 20px;
  background-color: #fff;
}
@media (max-width: 960px) {
  .right-sidebar {
    display: none;
  }
}
</style>
