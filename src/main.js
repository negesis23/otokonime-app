import {
 createApp
} from 'vue';
import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, {
 registerComponents
} from 'framework7-vue/bundle';
import 'framework7/css/bundle';
import 'material-icons/iconfont/filled.css';

Framework7.use(Framework7Vue);

import './App.css';

import App from './App.vue';

const app = createApp(App);

registerComponents(app);

app.mount('#app');