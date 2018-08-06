<template>
  <div class="blogs-content">
    <blog-card v-for="item in [1,2,3,4]" :key="item"></blog-card>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { BlogCard } from './index';
export default {
  components: {
    BlogCard
  },
  data() {
    return {};
  }
};
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
