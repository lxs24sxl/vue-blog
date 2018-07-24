<template>
  <div>
    <ul class="panel-wrapper" v-if="blogs">
      <panel-item 
        v-for="item in blogs" 
        :key="item.id" 
        :value="item"
        />
    </ul>
    <div v-else>
      暂无内容
    </div>
  </div>

</template>

<script>
import PanelItem from './PanelItem';
export default {
  data() {
    return {};
  },
  components: {
    PanelItem
  },
  props: {
    blogs: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
