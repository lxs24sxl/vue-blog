<template>
  <main-section>
    <left-section>
      <blog-nav title="重点文章" :tags="mainTags"></blog-nav>
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
import { blogs, tags, mainTags } from '@/data/index';
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
      tagList: tags,
      blogList: blogs,
      mainTags: mainTags
    };
  },
  created() {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo);
  }
};
</script>

<style lang="scss" scoped>
</style>
