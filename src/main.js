import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueParticlesUse from './lib/index.js'
// import vueParticlesUse from 'vue-particles-use'

Vue.config.productionTip = false;

Vue.use(vueParticlesUse);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
