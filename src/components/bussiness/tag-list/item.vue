<template>
  <div class="tag-item">
    {{ value.title }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-item {
  margin-right: 12px;
  margin-bottom: 12px;
  background-color: #f3f6f3;
  cursor: pointer;
  height: 30px;
  color: inherit;
  line-height: 30px;
  padding-left: 22px;
  padding-right: 22px;
  border-radius: 30px;
  &:hover {
    color: #fff;
    background-color: #0c0;
  }
}
</style>
