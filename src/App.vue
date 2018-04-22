<template>
  <div id="app">
    <my-header :poiInfo='poiInfo'></my-header>
    <my-nav></my-nav>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/Header/Header';
  import MyNav from './components/Nav/Nav';

  export default {
    name: 'App',
    components: {
      MyHeader,
      MyNav,
    },
    data() {
      return {
        // header's information
        poiInfo: {},
      };
    },
    created() {
      let self = this;
      // axios request to get data
      this.$axios
        .get('/api/goods')
        .then(function(response) {
          let dataSource = response.data;
          if (dataSource.code === 0) {
            self.poiInfo = dataSource.data.poi_info;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  };
</script>

<style>

</style>
