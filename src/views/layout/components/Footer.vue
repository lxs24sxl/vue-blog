<template>
  <div class="footer-wrapper">
    <div class="footer-link">
      <ul class="link-list">
        <li @click="switchToSite(item.link)" v-for="item in lxsLink" :key="item.site" class="link-item">
          <i :class="`iconfont icon-${item.site}`"></i>
        </li>
      </ul>
      <div class="link-title">© 2018 · lxs24sxl · ALL RIGHT RESERVED · 中国-广东省-广州市</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lxsLink: [
        {
          site: 'weibo',
          link: 'https://www.weibo.com/3545563737/profile?topnav=1&wvr=6'
        },
        { site: 'github', link: 'https://github.com/lxs24sxl' },
        {
          site: 'facebook',
          link: 'https://www.facebook.com/profile.php?id=100012801641980'
        }
      ]
    };
  },
  methods: {
    switchToSite(link) {
      window.open(link, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('./iconfont/iconfont.scss');
.footer {
  &-wrapper {
    width: 100%;
    margin-top: 10px;
    border-top: 1px solid #eaecef;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
  &-link {
    width: 100%;
    padding: 40px 0;
    .link {
      &-list {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-item {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        cursor: pointer;
        &:not(:first-child) {
          margin-left: 15px;
        }
        &:hover {
          background-color: #999;
        }
        .iconfont {
          color: #fff;
          font-size: 24px;
        }
      }
      &-title {
        margin-top: 10px;
        text-align: center;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
