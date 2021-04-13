import BaseTypeImg from '@components/BaseTypeImg/index.vue';
import 'amfe-flexible';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
const app = createApp(App);
app.component(BaseTypeImg.name, BaseTypeImg);
app
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'small' })
  .mount('#app');
