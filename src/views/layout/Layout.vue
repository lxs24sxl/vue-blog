<template>
  <div>
    <Header></Header>
    <app-main></app-main>

  </div>
</template>

<script>
import { Header, AppMain } from './components/index';

export default {
  name: 'Layout',
  components: {
    Header,
    AppMain
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
