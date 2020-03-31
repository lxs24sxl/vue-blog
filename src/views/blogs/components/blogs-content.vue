<template>
  <div class="blogs-content">
    <blog-card v-for="blog in blogs"
               :key="blog.id"
               :blog="blog"></blog-card>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { BlogCard } from './index'
export default {
  props: ['blogs'],
  components: {
    BlogCard
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.blogs {
  &-content {
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
    .footer {
      text-align: center;
    }
  }
}
</style>
