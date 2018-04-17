<template>
  <!-- 使用 router-link 组件来导航. -->
  <!-- 通过传入 `to` 属性指定链接. -->
  <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
  <div class="nav">
    <router-link to="/goods" class="navItems">Goods
      <i></i>
    </router-link>
    <router-link to="/ratings" class="navItems">Ratings
      <i></i>
    </router-link>
    <router-link to="/seller" class="navItems">Seller
      <i></i>
    </router-link>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .nav {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px red;
  }

  .navItems {
    flex: 1;
    text-align: center;
    color: #666666;
    text-decoration: none;
    font-size: 13px;
  }

  .navItems.active {
    color: #ffbb22;
  }

  .navItems.active i {
    width: 10px;
    height: 5px;
    background-color: #ffbb22;
  }
</style>
