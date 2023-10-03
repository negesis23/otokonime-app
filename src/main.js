import {
 createApp
} from 'vue';
import Framework7 from 'framework7/lite';
import Framework7Vue, {
 f7Page,
 f7Navbar,
 f7BlockTitle,
 f7Block,
 f7Button,
} from 'framework7-vue';
import 'framework7/css';
import 'material-icons/iconfont/filled.css';

Framework7.use(Framework7Vue);

import App from './App.vue';

const app = createApp(App);

app
.component('f7-page', f7Page)
.component('f7-navbar', f7Navbar)
.component('f7-block-title', f7BlockTitle)
.component('f7-block', f7Block)
.component('f7-button', f7Button)

.mount('#app');