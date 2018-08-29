<template>
  <div :class="`${block.type} custom-block`">
    <p class="custom-block-title">{{block.title}}</p>
    <p v-html="block.content"></p>
  </div>
</template>

<script>
export default {
  props: ['block'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
a,
p a code {
  color: #3eaf7c;
}
// 区域
.custom-block.danger,
.custom-block.tip,
.custom-block.warning {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
}
.custom-block.warning .custom-block-title {
  color: #b29400;
}
.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}
.custom-block.warning {
  background-color: rgba(255, 229, 100, 0.3);
  border-color: #e7c000;
  color: #6b5900;
}
.custom-block.danger .custom-block-title {
  color: #900;
}
.custom-block.tip .custom-block-title {
  color: #42b983;
}
.custom-block.danger {
  background-color: #ffe6e6;
  border-color: #c00;
  color: #4d0000;
}
.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #42b983;
}
p {
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
</style>
