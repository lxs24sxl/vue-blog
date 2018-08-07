<template>
  <div class="photo-wrapper">
    <div class="masonry">
      <div class="column" v-for="(item, index) in resortDataList" :key="index">
        <div v-for="cItem in item" :key="cItem.id" class="item">
          <div class="item__content">
            <img class="item__content-img" :src="isCanWebp?cItem.img: cItem.sub_img" alt="不支持webp格式且网络中断时展示的文本" />
            <div class="item__content-main" style="height: 60px">
              <div class="main-wrapper">
                <div class="title">标题标题标题标题标题标题标题标题</div>
                <div class="sub">
                  <span>2018-08-06</span>
                  <span>lxs24sxl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      bannerInfo: {
        title: '',
        subTitle: '',
        bgImg: '',
        isShowBanner: false,
        size: 'normal'
      },
      dataList: [
        {
          id: '0001',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          // sub_img: 'https://dri.es/files/images/blog/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0002',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },
        {
          id: '0003',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          // sub_img: 'https://mdn.mozillademos.org/files/13502/cake.png',
          height: 264
        },
        {
          id: '0004',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },

        {
          id: '0005',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          // sub_img: 'https://mdn.mozillademos.org/files/13502/cake.png',
          height: 264
        },
        {
          id: '0006',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },
        {
          id: '0007',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          // sub_img: 'https://dri.es/files/images/blog/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0008',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          // sub_img: 'https://dri.es/files/images/blog/universal-javascript.jpg',
          height: 282
        },

        {
          id: '0009',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          // sub_img: 'https://mdn.mozillademos.org/files/13502/cake.png',
          height: 264
        },
        {
          id: '0010',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },
        {
          id: '0011',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          // sub_img: 'https://dri.es/files/images/blog/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0012',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },

        {
          id: '0013',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },
        {
          id: '0014',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },
        {
          id: '0015',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          // sub_img: 'https://dri.es/files/images/blog/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0016',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          // sub_img: 'https://mdn.mozillademos.org/files/13502/cake.png',
          height: 264
        },

        {
          id: '0017',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          height: 172
        },
        {
          id: '0018',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          // sub_img: 'https://dri.es/files/images/blog/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0019',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          // sub_img: 'https://mdn.mozillademos.org/files/13502/cake.png',
          height: 264
        },
        {
          id: '0020',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          // sub_img: 'http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg',
          size: 'small',
          height: 172
        }
      ],
      resortDataList: [
        // [
        //   { id: '0001', img: '', size: 'normal' },
        //   { id: '0002', img: '', size: 'small' },
        //   { id: '0003', img: '', size: 'medium' },
        //   { id: '0004', img: '', size: 'small' }
        // ],
        // [
        //   { id: '0005', img: '', size: 'medium' },
        //   { id: '0006', img: '', size: 'small' },
        //   { id: '0007', img: '', size: 'normal' },
        //   { id: '0008', img: '', size: 'normal' }
        // ],
        // [
        //   { id: '0009', img: '', size: 'medium' },
        //   { id: '0010', img: '', size: 'small' },
        //   { id: '0011', img: '', size: 'normal' },
        //   { id: '0012', img: '', size: 'small' }
        // ],
        // [
        //   { id: '0013', img: '', size: 'small' },
        //   { id: '0014', img: '', size: 'small' },
        //   { id: '0015', img: '', size: 'normal' },
        //   { id: '0016', img: '', size: 'medium' }
        // ],
        // [
        //   { id: '0017', img: '', size: 'small' },
        //   { id: '0018', img: '', size: 'normal' },
        //   { id: '0019', img: '', size: 'medium' },
        //   { id: '0020', img: '', size: 'small' }
        // ]
      ],
      col: null
    };
  },
  computed: {
    ...mapGetters(['isCanWebp'])
  },
  created() {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo);
  },
  mounted() {
    const that = this;
    that.dataInit(that.checkColumn());
    // 监听尺寸改变事件
    window.onresize = function temp() {
      let oCol = that.checkColumn();
      that.dataInit(oCol);
    };
  },
  methods: {
    /**
     * 数据初始化
     */
    dataInit(column) {
      let oColumn = +column;
      if (this.col === oColumn) return;
      this.col = oColumn;
      let list = this.dataList;
      let arr = [];
      for (let i = 0; i < oColumn; i++) {
        arr.push(list.filter((item, index) => index % oColumn === i));
      }
      this.resortDataList = arr;
    },
    /**
     * 检查行数
     */
    checkColumn() {
      let clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      let col = null;
      if (clientWidth > 1100) {
        col = 5;
      } else if (clientWidth > 800) {
        col = 4;
      } else if (clientWidth > 600) {
        col = 3;
      } else {
        col = 2;
      }
      return col;
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-wrapper {
  max-width: 1110px;
  margin: 0 auto;
}

@import url('https://fonts.googleapis.com/css?family=PT+Mono');

@function set-counter-bg-color($color) {
  @if (lightness($color) > 50) {
    @return darken($color, 60%);
  } @else {
    @return lighten($color, 50%);
  }
}

$bg: #0d0630;
$itemBg1: #18314f;
$itemBg2: #8bbeb2;
$itemBg3: #e6f9af;
$itemBg4: #384e77;
$itemBgWhite: #fff;
@mixin setColorAndHover($baseColor) {
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

.masonry {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 360px) {
    flex-direction: row;
  }
}

.column {
  display: -webkit-box;
  flex-flow: column wrap;
  width: 100%;

  @media screen and (min-width: 360px) {
    width: calc(100% / 2);
  }
  @media screen and (min-width: 600px) {
    width: calc(100% / 3);
  }
  @media screen and (min-width: 800px) {
    width: calc(100% / 4);
  }
  @media screen and (min-width: 1100px) {
    width: calc(100% / 5);
  }
}

.item {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  counter-increment: item-counter;
  height: auto;
  &__content {
    position: relative;
    width: 100%;
    color: darken($bg, 5%);
    background-color: #fff;
    box-sizing: border-box;
    .item__content-img {
      width: 100%;
      height: auto;
      display: block;
      background-size: contain;
      background-repeat: no-repeat;
      background-color: #fff;
      text-align: center;
      transition: all 0.4s;
    }
    .item__content-main {
      height: 60px;
      .main-wrapper {
        padding: 10px;
        display: flex;
        flex-direction: column;
        .title {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .sub {
          color: #999;
          font-size: 14px;
          span {
            &:first-child {
              &::after {
                content: '\B7';
                margin: 0 0.4em;
                color: #8f969c;
              }
            }
          }
        }
      }
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 13px;
      width: 2em;
      height: 2em;
      line-height: 2em;
      text-align: center;
      font-weight: bold;
    }

    &:after {
      color: darken($bg, 10%);
    }
  }
}
</style>
