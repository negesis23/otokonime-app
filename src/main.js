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

import {
 Plugins
} from '@capacitor/core';
const {
 SplashScreen
} = Plugins;

SplashScreen.hide();

import './app.css'
import App from './App';

const app = createApp(App);

registerComponents(app);

app.mount('#app');