<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>
    <div class="content"></div>
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
