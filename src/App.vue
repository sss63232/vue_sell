<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <test/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import test from "./components/test";

export default {
  name: "App",
  components: {
    HelloWorld,
    test
  }
};
</script>

<style>

</style>
