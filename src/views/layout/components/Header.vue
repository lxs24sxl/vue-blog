<template>
  <div class="containner">
    <b-navbar toggleable="md" :type="isShowNav && bannerInfo.isShowBanner? 'light': 'dark'" variant="white" :class="{'xs-navbar': true, 'default': !bannerInfo.isShowBanner, 'fixed': isFixed}">
      <!-- 标题orLogo -->
      <b-navbar-brand href="#">lxs24sxl</b-navbar-brand>
      <!-- 导航栏 -->
      <b-collapse is-nav id="nav_collapse" @click="toggleNav">
        <b-navbar-nav class="ml-auto" right>
          <b-nav-item v-for="item in routerList" @click.capture="toggleNavItem(item.to)" :key="item.title">
            <router-link :to="item.to">{{item.title}}</router-link>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>
                <router-link to="/tags">标签</router-link>
              </em>
            </template>
            <b-dropdown-item href="#">javascript</b-dropdown-item>
            <b-dropdown-item href="#">webpack</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
      <!-- 折叠后的 -->
      <b-navbar-toggle id="toggleBtn" @click.native="toggleNav" target="nav_collapse">
      </b-navbar-toggle>
      <div :class="{'xs-nav-bg': true, 'hide': !isShowNav}"></div>
    </b-navbar>
    <!-- navbar-1.vue -->

    <div class="banner-wrapper" v-if="bannerInfo.isShowBanner">
      <div :class="'site-header '+bannerInfo.size">
        <h1>{{bannerInfo.title}}</h1>
        <h3>{{bannerInfo.subTitle}}</h3>
      </div>
      <div class="banner-bg" :style="{backgroundImage: 'url('+bannerInfo.bgImg+')'}"></div>
    </div>
    <div v-else class="filling-wrapper"></div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
let timer = null;

export default {
  name: 'Header',
  data() {
    return {
      isShowNav: false,
      scroll: '',
      isFixed: false,
      isRouterChange: false,
      routerList: [
        { title: '首页', to: '/index', disabled: false },
        { title: '文章', to: '/blogs/index', disabled: false },
        { title: '图片集', to: '/photo/index', disabled: false },
        { title: '关于我', to: '/about/index', disabled: false }
      ]
    };
  },
  computed: {
    ...mapGetters(['bannerInfo'])
  },
  methods: {
    toggleNavItem(src) {
      if (this.$route.path === src) {
        this.isShowNav = true;
      }
    },
    toggleNav() {
      this.isShowNav = document
        .getElementById('toggleBtn')
        .getAttribute('aria-expanded');
    },
    scrollEvent() {
      let that = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        that.scroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        that.isFixed = that.scroll >= 56 ? true : false;
      }, 150);
    },
    addHandler() {
      return document.body.addEventListener
        ? function(target, eventType, handler) {
            target.addEventListener(eventType, handler, false);
          }
        : function(target, eventType, handler) {
            target.attachEvent('on' + eventType, handler);
          };
    },
    removeHandler() {
      return document.body.removeEventListener
        ? function(target, eventType, handler) {
            target.removeEventListener(eventType, handler, false);
          }
        : function(target, eventType, handler) {
            target.detachEvent('on' + eventType, handler);
          };
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
};
</script>

<style lang="scss" scoped>
.filling-wrapper {
  height: 48.5px;
  width: 100%;
}
.banner-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  .banner-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    animation: autoScale 12s linear infinite;
  }
  .site-header,
  .site-header.big {
    padding: 150px 0;
    color: #fff;
    h1 {
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 3rem;
    }
  }
  .site-header.big {
    // text-align: left;
  }
  .site-header.small {
    padding: 100px 0;
  }
  .time {
    font-family: Lora, 'Times Mew Roman', serif;
    font-style: italic;
    font-weight: 300;
  }
}
@keyframes autoScale {
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(1.2) translateY(-6px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}
</style>
