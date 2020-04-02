<template>
  <div class="blog-card"
       @click="swiperToArticle">
    <h3 class="blog-card-title">{{blog.title}}</h3>
    <p class="blog-card-desc">{{blog.desc}}</p>
    <div class="blog-card-footer">
      <span class="footer-item footer-item--author">{{blog.author}}</span>
      <span class="footer-item footer-item--time">{{blog.time}}</span>
      <span class="footer-item footer-item--copyright">{{blog.copyright === '1'?'原': '转'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog'],

  methods: {
    swiperToArticle () {
      this.$router.push({ name: 'article', query: { id: this.blog.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &-card {
    padding: 15px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.5s;
    > * {
      padding: 0;
      margin: 0;
    }
    &:hover {
      background-color: rgba($color: #007bff, $alpha: 0.7);
      cursor: pointer;
      .blog-card-title {
        color: white;
      }
      .blog-card-desc {
        color: rgba($color: white, $alpha: 0.8);
      }
      .blog-card-footer {
        color: rgba($color: white, $alpha: 0.5);
      }
    }
    &-title {
      margin-bottom: 8px;
    }
    &-desc {
      margin-bottom: 6px;
    }
    &-footer {
      display: flex;
      .footer-item {
        &:not(:last-child) {
          transition: all 0.3s;
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
</style>
