<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "./components/Header/Header";
import MyNav from "./components/Nav/Nav";

export default {
  name: "App",
  components: {
    MyHeader,
    MyNav
  }
};
</script>

<style>

</style>
