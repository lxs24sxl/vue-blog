<template>
  <div class="tag-list"
       v-if="tags">
    <tag-item v-for="item in tags"
              :key="item.id"
              :value="item"></tag-item>
  </div>
  <div class="no-value"
       v-else>暂无标签</div>
</template>

<script>
import TagItem from './item'

export default {
  name: 'TagList',

  components: {
    TagItem
  },

  props: {
    tags: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-list {
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.no-value {
  margin-top: 20px;
  text-align: center;
}
</style>
