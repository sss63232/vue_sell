<template>
  <div class="header">
    <div class="top-wrapper">
      <div class="back-wrapper">
        <div class="icon-arrow_lift"></div>
      </div>
      <form class="search-wrapper">
        <span class="search-icon"></span>
        <input class="search-bar" type="text" placeholder="搜索">
      </form>
      <div class="more-wrapper">
        <a href="#" class="spelling-bt">拼單</a>
        <div class="more-bt"></div>
      </div>
    </div>

    <div class="content-wrapper"></div>

    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: {
    poiInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style>
@import url("Header.css");
</style>
