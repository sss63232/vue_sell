// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Raven from 'raven-js';
import RavenVue from '../node_modules/raven-js/plugins/vue';

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

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    components: {
      App
    },
    template: '<App/>'
  })


  // setTimeout(() => {
  //   throw new Error('wrong');
  // }, 5000);

});
