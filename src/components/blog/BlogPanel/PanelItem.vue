<template>
  <li class="item">
    <div class="entry">
      <div class="content-box">
        <div class="info-box">
          <div class="info-row title-row">
            {{ value.title }}
          </div>
          <div class="info-row">
            <ul class="meta-list">
              <li class="item category">
                <span class="category-title">{{value.tag}}</span>
              </li>
              <li class="item username">{{value.author}}</li>
              <li class="item time">{{value.time}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.content-box {
  min-height: 2.8rem;
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  transition: background-color 0.4s;
  &:hover {
    background-color: #eee;
  }
  .info-box {
    cursor: pointer;
    .title-row {
      margin: 0.4rem 0.4rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #2e3135;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1;
      &:hover {
        text-decoration: underline;
      }
    }
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    .meta-list {
      display: flex;
      align-items: baseline;
      white-space: nowrap;
      .item {
        &.username {
          color: #17aabb;
        }
        &:not(:last-child) {
          &:not(.category) {
            transition: all 0.3s;
            &:hover {
              color: #000;
            }
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
}
.item.category {
  .category-title {
    display: inline-block;
    margin-right: 0.6rem;
    padding: 0.19rem 0.49rem;
    min-width: 2.25rem;
    text-align: center;
    line-height: 1;
    color: #fff;
    background-color: #c69f42;
    border-radius: 2px;
  }
  .username {
  }
}
</style>
