<template>
  <main class="main-section">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'MainSection'
}
</script>

<style lang="scss" scoped>
.main-section {
  display: flex;
  max-width: 960px;
  width: 100%;
  margin: 20px auto 0px;
  position: relative;
}
</style>
