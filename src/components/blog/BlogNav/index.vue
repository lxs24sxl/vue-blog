<template>
  <nav class="category-nav">
    <h5 :class="{'small': size === 'small'}">{{title}}</h5>
    <ul class="nav-list" v-if="!hasMore">
      <li class="nav-item" v-for="item in tags" :key="item.id">{{ item.title }}</li>
    </ul>
    <router-link :to="to" class="small blue" v-else>查看全部</router-link>
  </nav>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: '默认标题',
      required: true
    },
    hasMore: {
      type: Boolean,
      default: null
    },
    size: {
      type: String,
      default: 'normal'
    },
    to: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.category-nav {
  background-color: #fff;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
  h5 {
    font-weight: 500;
  }
  span {
    color: #007fff;
  }
  .nav-list {
    display: flex;
    align-items: baseline;
    .nav-item {
      margin-left: 20px;
      cursor: pointer;
      &:first-child {
        color: #007fff;
      }
    }
  }
}
@media (max-width: 765px) {
  .category-nav {
    .nav-list {
      visibility: hidden;
    }
  }
}
</style>
