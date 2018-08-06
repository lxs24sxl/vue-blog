<template>
  <div class="blogs">
    <blogs-header :title="header_config.title" :desc="header_config.desc" :tags="header_config.tags" />
    <blogs-content>
      <div slot="footer">目前就写了这么多~</div>
    </blogs-content>
  </div>
</template>

<script>
import { BlogsContent, BlogsHeader } from './components/index';
export default {
  name: 'home',
  components: {
    BlogsHeader,
    BlogsContent
  },
  data() {
    return {
      bannerInfo: {
        title: '',
        subTitle: '',
        bgImg: '',
        isShowBanner: false,
        size: 'normal'
      },
      header_config: {
        title: '全部文章',
        desc: '这是一个沉淀技术的个人网站;文章类型包括原创技术、吹水和转载',
        tags: [
          { id: '1001', title: '推荐' },
          { id: '1002', title: 'javascript' },
          { id: '1003', title: 'webpack' },
          { id: '1004', title: 'css' }
        ]
      }
    };
  },
  created() {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo);
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Mono');

$bg: #4f000b;
$itemBg1: #720026;
$itemBg2: #ce4257;
$itemBg3: #ffc093;
$itemBg4: #ff7f51;
$counterBg: #222;

@mixin setColorAndHover($baseColor) {
  color: $baseColor;
  &:hover {
    background: lighten($baseColor, 8%);
  }
}

body,
html {
  position: relative;
  width: 100%;
  height: 100%;
  background: $bg;
  font-family: 'PT Mono', monospace;
}
.blogs {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
