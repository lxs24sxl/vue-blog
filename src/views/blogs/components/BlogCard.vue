<template>
  <div class="card-wrapper">
    <h3 class="title">{{blog.title}}</h3>
    <p class="desc">{{blog.desc}}</p>
    <div class="footer">
      <span class="item author">{{blog.author}}</span>
      <span class="item time">{{blog.time}}</span>
      <span class="item copyright">{{blog.copyright === '1'?'原': '转'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.card {
  &-wrapper {
    padding: 15px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    > * {
      padding: 0;
      margin: 0;
    }
    .title {
      margin-bottom: 8px;
    }
    .desc {
      margin-bottom: 6px;
    }
    .footer {
      display: flex;
      .item {
        &:not(:last-child) {
          transition: all 0.3s;
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
</style>
