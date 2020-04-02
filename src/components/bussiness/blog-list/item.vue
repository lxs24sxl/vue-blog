<template>
  <li class="blog-item">
    <div class="blog-item-inner">
      <div class="inner-info">
        <div class="info">
          <div class="info-row title-row">
            {{ value.title }}
          </div>
          <div class="info-row">
            <ul class="meta-list">
              <li class="item category">
                <span class="category-title"
                      :style="`background-color: ${value.tag.bg_color}`">{{value.tag.title}}</span>
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
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-item-inner {
  .inner-info {
    min-height: 2.8rem;
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    transition: background-color 0.4s;
    border-bottom: 1px solid rgba(143, 150, 156, 0.1);
    &:hover {
      background-color: #eee;
    }
    .info {
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
                content: "\B7";
                margin: 0 0.4em;
                color: #8f969c;
              }
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
