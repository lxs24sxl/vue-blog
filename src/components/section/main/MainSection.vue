<template>
  <main class="main-wrapper">
    <slot></slot>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  max-width: 960px;
  width: 100%;
  margin: 20px auto 0px;
  position: relative;
}
</style>
