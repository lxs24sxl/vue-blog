<template>
  <div class="about-wrapper">
    <h1>个人信息</h1>
    <div class="about-message">
      <pre>
      {
        basic: {
          name: "Xiaoshun Lin",
          code_name: "lxs24sxl",
          age: "21",
          gender: "male",
          data_of_birth: "February 11, 1997",
          occupation: "Front-end development",
          country: "china",
          province: "Guangdong",
          city: "Guangzhou",
          languages: {
            Chinese: "native", 
            English: "basic"
          },
          hobbies: [
            "basketball",
            "Web Designing"
          ]
        },
        sklls: {
          front-end_languages: [
            "webpack", 
            "vue.js", 
            "mini programs, 
            "react.js", 
            "javascript", 
            "html5", 
            "underscore.js", 
            "css/html", 
            "bootstrap"
          ],
          computer_software: [
            "VsCode", 
            "Sublime Text", 
            "Android Studio", 
            "Microsoft office", 
            "so on"
          ],
          certificate: [ 
            "CET-4", 
            "NCRE 3-Software Testing",
            "China National Scholarship(2017)",
            "National Endeavor Scholarship(2016)"
          ],
          education: [
            {
              time: "2015.09-2018-07",
              name: "Guangdong AIB Polytechnic College"
            }
          ],
        }
      }
    </pre>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerInfo: {
        title: '关于林晓舜',
        subTitle: 'Email: 1001931638@139.com',
        bgImg: 'http://eps.ink/img/post-bg-rwd.jpg',
        isShowBanner: true,
        size: 'normal'
      }
    };
  },
  created() {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo);
  }
};
</script>
<style lang="scss">
.about {
  &-wrapper {
    max-width: 1110px;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #fff;
    h1 {
      padding-top: 10px;
    }
  }
  &-message {
    text-align: left;
  }
}
</style>
