<template>
  <div class="blogs-header">
    <h1 class="text-normal">{{title}}</h1>
    <p>{{desc}}</p>
    <div v-if="isShowTags" class="blogs-tags">
      <div class="tags-title">热门标签</div>
      <tag-list :tags="tags"></tag-list>
    </div>
  </div>
</template>

<script>
import { TagList } from '@/components/tag/index';
export default {
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    desc: {
      type: String,
      default: '默认描述默认描述'
    },
    tags: {
      type: Array,
      default: null
    }
  },
  components: {
    TagList
  },
  computed: {
    isShowTags() {
      return this.tags.length;
    }
  },
  data() {
    return {
      tagList: [
        { id: '1001', title: '推荐' },
        { id: '1002', title: 'javascript' },
        { id: '1003', title: 'webpack' },
        { id: '1004', title: 'css' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.blogs {
  &-header {
    margin-top: 10px;
    border-radius: 5px;
    padding: 25px 25px 15px;
    background-color: #fff;
    p {
      margin: 0;
      padding: 0;
    }
  }
  &-tags {
    display: flex;
    .tags-title {
      padding-top: 20px;
      min-width: 70px;
      display: flex;
      align-items: flex-start;
    }
  }
}
</style>
