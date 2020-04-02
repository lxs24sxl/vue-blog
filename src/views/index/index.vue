<template>
  <main-section>
    <left-section>
      <category-nav title="重点文章"
                    :tags="mainTags"></category-nav>
      <blog-list :blogs="blogList"></blog-list>
    </left-section>

    <right-section :width="240">
      <category-nav title="热门标签"
                    size="small"
                    :has-more="true"
                    to="/tags/index"></category-nav>
      <tag-list :tags="tagList"></tag-list>
    </right-section>
  </main-section>
</template>

<script>
import { blogs, tags, mainTags } from '@/data/index'
import IndexImg from '@/assets/images/index/index-bg.jpg'

export default {
  data () {
    return {
      bannerInfo: {
        title: '林晓舜的博客',
        subTitle: '大人物只是不断进取的小人物',
        bgImg: IndexImg,
        isShowBanner: true,
        size: 'normal'
      },
      tagList: tags,
      blogList: blogs,
      mainTags: mainTags
    }
  },

  created () {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo)
  }
}
</script>

<style lang="scss" scoped>
</style>
