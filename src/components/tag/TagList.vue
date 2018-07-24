<template>
  <div class="tag-list" v-if="tags">
    <tag v-for="item in tags" :key="item.id" :value="item"></tag>
  </div>
  <div class="no-value" v-else>暂无标签</div>
</template>

<script>
import Tag from './Tag';
export default {
  data() {
    return {};
  },
  components: {
    Tag
  },
  props: {
    tags: {
      type: Array,
      default: null
    }
  }
};
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
