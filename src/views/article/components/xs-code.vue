<template>
  <div class="language-js">
    <pre class="language-js">
      <code v-html="contents"></code>
    </pre>
  </div>
</template>

<script>
export default {
  props: ['contents'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
div[class*='language-'] {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
}
div[class*='language-'] pre,
div[class*='language-'] pre[class*='language-'] {
  background: transparent;
  position: relative;
  z-index: 1;
}
div[class*='language-']:before {
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 1em;
  font-size: 0.75rem;
  color: hsla(0, 0%, 100%, 0.4);
}
div[class~='language-js']:before {
  content: 'js';
}
div[class~='language-html']:before {
  content: 'html';
}
div[class~='language-css']:before {
  content: 'css';
}
pre[class*='language-'] code,
pre code {
  color: #fff;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
}
pre[class*='language-'] {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
  background-color: #282c34;
  border-radius: 6px;
  overflow: auto;
}
</style>
