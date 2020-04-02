<template>
  <div class="blog-list">
    <ul class="blog-list-inner"
        v-if="blogs">
      <blog-item v-for="item in blogs"
                 :key="item.id"
                 :value="item" />
    </ul>
    <div v-else>
      暂无内容
    </div>
  </div>

</template>

<script>
import blogItem from './item'

export default {
  name: 'BlogList',

  components: {
    blogItem
  },

  props: {
    blogs: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
.blog-list {
  &-inner {
    .blog-item {
      &:last-child {
        .blog-item-inner {
          .inner-info {
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>
