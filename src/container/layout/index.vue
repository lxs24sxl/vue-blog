<template>
  <div class="layout">
    <Header></Header>
    <app-main></app-main>
    <Footer></Footer>
  </div>
</template>

<script>
import { Header, AppMain, Footer } from './components/index'

export default {
  name: 'Layout',

  components: {
    Header,
    AppMain,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
