<template>
  <section class="photo-wrapper">
    <div class="masonry">
      <div class="column"
           v-for="(item, index) in resortDataList"
           :key="index">
        <div v-for="cItem in item"
             :key="cItem.id"
             class="item">
          <div class="item__content">
            <img class="item__content-img"
                 :style="`background-color: ${randomColorList[cItem.randomIndex]}`"
                 :onerror="errorPhoto"
                 :src="isCanWebp?cItem.img:cItem.sub_img"
                 alt="不支持webp格式且网络中断时展示的文本" />
            <div class="item__content-main"
                 style="height: 60px">
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
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import failed from '@/assets/images/failed.png'
export default {
  data () {
    return {
      bannerInfo: {
        title: '',
        subTitle: '',
        bgImg: '',
        isShowBanner: false,
        size: 'normal'
      },
      errorPhoto: `this.src='${failed}'`,
      dataList: [
        {
          id: '0001',
          img: 'http://80j6td.s3-cn-south-1.qiniucs.com/wall-ar.webp',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/univervascript.jpg',
          height: 282
        },
        {
          id: '0002',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },
        {
          id: '0003',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180803--04058-at-the-flower-farm.webp',
          size: 'medium',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cake.png',
          height: 264
        },
        {
          id: '0004',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },

        {
          id: '0005',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180803--04058-at-the-flower-farm.webp',
          size: 'medium',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cake.png',
          height: 264
        },
        {
          id: '0006',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },
        {
          id: '0007',
          img: 'http://80j6td.s3-cn-south-1.qiniucs.com/wall-art.webp',
          size: 'normal',
          sub_img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0008',
          img: 'http://80j6td.s3-cn-south-1.qiniucs.com/wall-art.webp',
          size: 'normal',
          sub_img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/universal-javascript.jpg',
          height: 282
        },

        {
          id: '0009',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180803--04058-at-the-flower-farm.webp',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/mastelog_images/cake.png',
          height: 264
        },
        {
          id: '0010',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },
        {
          id: '0011',
          img: 'http://80j6td.s3-cn-south-1.qiniucs.com/wall-art.webp',
          size: 'normal',
          sub_img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0012',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },

        {
          id: '0013',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-0.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },
        {
          id: '0014',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },
        {
          id: '0015',
          img: 'http://80j6td.s3-cn-south-1.qiniucs.com/wall-art.webp',
          size: 'normal',
          sub_img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0016',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180803--04058-at-the-flower-farm.webp',
          size: 'medium',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cake.png',
          height: 264
        },

        {
          id: '0017',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          size: 'small',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          height: 172
        },
        {
          id: '0018',
          img: 'http://80j6td.s3-cn-south-1.qiniucs.com/wall-art.webp',
          size: 'normal',
          sub_img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0019',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180803--04058-at-the-flower-farm.webp',
          size: 'medium',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cake.png',
          height: 264
        },
        {
          id: '0020',
          img:
            'http://80j6td.s3-cn-south-1.qiniucs.com/ChrisSutton-20180501---philharmonie-de-paris-10.webp',
          sub_img: 'http://80j6td.s3-cn-south-1.qiniucs.com/cat.jpg',
          size: 'small',
          height: 172
        }
      ],
      resortDataList: [],
      col: null,
      randomColorList: ['#8bbeb2', '#e6f9af', '#384e77']
    }
  },
  computed: {
    ...mapGetters(['isCanWebp'])
  },
  created () {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo)
  },
  mounted () {
    const that = this
    that.dataInit(that.checkColumn())
    // 监听尺寸改变事件
    window.onresize = function temp () {
      let oCol = that.checkColumn()
      that.dataInit(oCol)
    }
  },
  methods: {
    /**
     * 数据初始化
     */
    dataInit (column) {
      let oColumn = +column
      if (this.col === oColumn) return
      this.col = oColumn
      // let list = this.dataList;
      // 获取宽高
      // let oImg = new Image();
      let list = this.dataList.map(item => {
        //   oImg = new Image();
        //   oImg.src = item.img;
        //   oImg.onload = function() {
        //     item.width = oImg.width;
        //     item.height = oImg.height;
        //   };
        item.randomIndex = parseInt(Math.random() * 3)
        return item
      })
      let arr = []
      for (let i = 0; i < oColumn; i++) {
        arr.push(list.filter((item, index) => index % oColumn === i))
      }
      this.resortDataList = arr
      console.log('list', list)
    },
    /**
     * 检查行数
     */
    checkColumn () {
      let clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      let col = null
      if (clientWidth > 1100) {
        col = 5
      } else if (clientWidth > 800) {
        col = 4
      } else if (clientWidth > 600) {
        col = 3
      } else {
        col = 2
      }
      return col
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Mono");

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
  font-family: "PT Mono", monospace;
}

.photo-wrapper {
  max-width: 1110px;
  margin: 0 auto;

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
        transition: all 1s;
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
                  content: "\B7";
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
}
</style>
