<template>
  <div class="tags-wrapper">
    <h3>全部标签</h3>
    <ul class="tags-list">
      <li class="tags-item" v-for="item in tagsList" :key="item.id">
        <div class="item-inner">
          <div class="img"></div>
          <span><strong>{{item.title}}</strong></span>
          <div class="sub">
            <span>文章数量: {{item.count}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerInfo: {
        title: '标签',
        subTitle: 'Be My Personal Best',
        bgImg: 'http://eps.ink/img/tag-bg.jpg',
        isShowBanner: true,
        size: 'small'
      },
      tagsList: [
        { title: 'webpack', recent_time: '2018-08-07', id: '0001', count: '1' },
        { title: 'vue.js', recent_time: '2018-08-07', id: '0002', count: '2' },
        {
          title: 'react.js',
          recent_time: '2018-08-07',
          id: '0003',
          count: '1'
        },
        {
          title: '微信小程序',
          recent_time: '2018-08-07',
          id: '0004',
          count: '0'
        },
        {
          title: 'javascript',
          recent_time: '2018-08-07',
          id: '0005',
          count: '0'
        },
        { title: 'css', recent_time: '2018-08-07', id: '0006', count: '0' }
      ]
    };
  },
  created() {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo);
  }
};
</script>

<style lang="scss" scoped>
.tags {
  &-wrapper {
    max-width: 1110px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #fff;
    padding: 15px;
  }
  &-list {
    margin-top: 10px;
    display: -webkit-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    @media (max-width: 360px) {
      flex-direction: column;
    }
    .tags-item {
      box-sizing: border-box;
      text-align: center;
      padding: 10px;
      @media screen and (min-width: 370px) {
        width: calc(100% / 2);
      }
      @media screen and (min-width: 720px) {
        width: calc(100% / 3);
      }
      @media screen and (min-width: 1000px) {
        width: calc(100% / 4);
      }
      .item-inner {
        height: 100%;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.4s;
        border-radius: 6px;
        &:hover {
          background-color: #999;
        }
        .img {
          width: 60px;
          height: 60px;
          border-radius: 100%;
          background-color: #fff;
          margin-top: 15px;
        }
        .sub {
          width: 100%;
          font-size: 12px;
          color: #666;
          margin-top: 6px;
          margin-bottom: 6px;
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
}
</style>
