<template>
  <div class="photo-wrapper">
    <div class="masonry">
      <div class="column" v-for="(item, index) in resortDataList" :key="index">
        <div v-for="cItem in item" :key="cItem.id" class="item">
          <div class="item__content">
            <img class="item__content-img" :style="`background-color: ${randomColorList[cItem.randomIndex]}`" :onerror="errorPhoto" :src="isCanWebp?cItem.img:cItem.sub_img" alt="不支持webp格式且网络中断时展示的文本" />
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
import failed from '@/assets/images/failed.png';
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
      errorPhoto: `this.src='${failed}'`,
      dataList: [
        {
          id: '0001',
          img:
            'https://lh3.googleusercontent.copc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/univervascript.jpg',
          height: 282
        },
        {
          id: '0002',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },
        {
          id: '0003',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          height: 264
        },
        {
          id: '0004',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },

        {
          id: '0005',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          height: 264
        },
        {
          id: '0006',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },
        {
          id: '0007',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0008',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          height: 282
        },

        {
          id: '0009',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/mastelog_images/cake.png',
          height: 264
        },
        {
          id: '0010',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },
        {
          id: '0011',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0012',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },

        {
          id: '0013',
          img:
            'https://lh3.googleusercont22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },
        {
          id: '0014',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },
        {
          id: '0015',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0016',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          height: 264
        },

        {
          id: '0017',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          size: 'small',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          height: 172
        },
        {
          id: '0018',
          img:
            'https://lh3.googleusercontent.com/-cGXquY7pZpc/W2fiCjCXgGI/AAAAAAAAbBg/-cngXfQkjtgx8pejxGDm-uKXoiNWqxm0QCJoC/w530-h530-n-rw/wall-art.jpg',
          size: 'normal',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/universal-javascript.jpg',
          height: 282
        },
        {
          id: '0019',
          img:
            'https://lh3.googleusercontent.com/-e-TH_gArm2A/W2f4SHwFTMI/AAAAAAACCJ8/f2KpjrSlfDk7TvQFPE35KRbl3TIjLCVfACJoC/w530-h497-n-rw/ChrisSutton-20180803--04058-at-the-flower-farm.jpg',
          size: 'medium',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cake.png',
          height: 264
        },
        {
          id: '0020',
          img:
            'https://lh3.googleusercontent.com/-59eYM0JY5AY/W2f0T9vq22I/AAAAAAACCJQ/YYSndkLFTLYSEeHJN9W0yD_4RCIvTflZgCJoC/w530-h325-n-rw/ChrisSutton-20180501---philharmonie-de-paris-10.jpg',
          sub_img:
            'https://github.com/lxs24sxl/readme_add_pic/raw/master/vue_blog_images/cat.jpg',
          size: 'small',
          height: 172
        }
      ],
      resortDataList: [],
      col: null,
      randomColorList: ['#8bbeb2', '#e6f9af', '#384e77']
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
        item.randomIndex = parseInt(Math.random() * 3);
        return item;
      });
      let arr = [];
      for (let i = 0; i < oColumn; i++) {
        arr.push(list.filter((item, index) => index % oColumn === i));
      }
      this.resortDataList = arr;
      console.log('list', list);
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
@import url('./photo.scss');
</style>
