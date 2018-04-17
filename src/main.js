// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import Raven from 'raven-js';
import RavenVue from '../node_modules/raven-js/plugins/vue';

///// vue-router 使用
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Goods from './components/Goods/Goods.vue';
import Ratings from './components/Ratings/Ratings.vue';
import Seller from './components/Seller/Seller.vue';


Raven
  .config('https://4f380245a3d344fe8debd0833e4af105@sentry.io/1186176')
  .addPlugin(RavenVue, Vue)
  .install();

Raven.context(function () {
  Raven.setUserContext({
    email: 'example@example.com',
    id: 'example_101'
  });

  Raven.setTagsContext({
    name: "newt"
  });

  Vue.config.productionTip = false
  Vue.use(VueRouter);

  ///// vue-router 使用
  // 2. 定义路由
  // 每个路由应该映射一个组件。 其中"component" 可以是
  // 通过 Vue.extend() 创建的组件构造器，
  // 或者，只是一个组件配置对象。
  // 我们晚点再讨论嵌套路由。
  const routes = [{
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    }, {
      path: '/seller',
      component: Seller
    }
  ];

  ///// vue-router 使用
  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    linkActiveClass: "active"
  });

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    components: {
      App
    },
    template: '<App/>',
    router
  });




  // setTimeout(() => {
  //   throw new Error('wrong');
  // }, 5000);

});
