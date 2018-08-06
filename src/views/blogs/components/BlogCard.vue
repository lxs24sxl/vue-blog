<template>
  <div class="card-wrapper">
    <h3 class="title">React 移动 web 极致优化</h3>
    <p class="desc">初学者对React可能满怀期待，觉得React可能完爆其它一切框架，甚至不切实际地认为React可能连原生的渲染都能完爆——对框架的狂热确实会出现这样的不切实际的期待。</p>
    <div class="footer">
      <span class="item author">lxs24sxl</span>
      <span class="item time">2018-08-06</span>
      <span class="item copyright">转</span>
    </div>
  </div>
</template>

<script>
export default {
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
