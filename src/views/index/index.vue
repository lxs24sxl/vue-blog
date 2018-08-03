<template>
  <main-section>
    <left-section>
      <blog-nav title="重点文章" :tags="tagList"></blog-nav>
      <blog-panel :blogs="blogList"></blog-panel>
    </left-section>
    <right-section :width="240">
      <blog-nav title="热门标签" size="small" :has-more="true" to="/tags/index"></blog-nav>
      <tag-list :tags="tagList"></tag-list>
    </right-section>
  </main-section>
</template>

<script>
import {
  LeftSection,
  RightSection,
  MainSection
} from '@/components/section/index';
import { BlogNav, BlogPanel } from '@/components/blog/index';
import { TagList } from '@/components/tag/index';
export default {
  components: {
    LeftSection,
    RightSection,
    MainSection,
    BlogNav,
    BlogPanel,
    TagList
  },
  data() {
    return {
      bannerInfo: {
        title: '林晓舜的博客',
        subTitle: '大人物只是不断进取的小人物',
        bgImg: 'http://eps.ink/img/post-bg-rwd.jpg',
        isShowBanner: true,
        size: 'normal'
      },
      tagList: [
        { id: '1001', title: '推荐' },
        { id: '1002', title: 'javascript' },
        { id: '1003', title: 'webpack' },
        { id: '1004', title: 'css' }
      ],
      blogList: [
        {
          id: '201807241638',
          title: '喜大普奔，Ant Design of Vue 1.0版本发布🎉🎉🎉',
          time: '2018-07-24 16:38:00',
          tag: 'vue',
          author: 'lxs24sxl'
        },
        {
          id: '201807241639',
          title: '喜大普奔，Ant Design of react 3.0版本发布🎉🎉🎉',
          time: '2018-07-24 16:38:00',
          tag: 'react',
          author: 'lxs24sxl'
        },
        {
          id: '2018072416340',
          title: '七天学不会nodejs--流',
          time: '2018-07-24 16:38:00',
          tag: 'node',
          author: 'lxs24sxl'
        },
        {
          id: '2018072416341',
          title: '七天学不会nodejs--流',
          time: '2018-07-24 16:38:00',
          tag: 'node',
          author: 'lxs24sxl'
        },
        {
          id: '2018072416342',
          title: '七天学不会nodejs--流',
          time: '2018-07-24 16:38:00',
          tag: 'node',
          author: 'lxs24sxl'
        },
        {
          id: '2018072416343',
          title: '七天学不会nodejs--流',
          time: '2018-07-24 16:38:00',
          tag: 'node',
          author: 'lxs24sxl'
        }
      ]
    };
  },
  created() {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo);
  }
};
</script>

<style lang="scss" scoped>
</style>
