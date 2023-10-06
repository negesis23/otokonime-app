import routes from './routes';
import {
 defineComponent,
 onMounted
} from 'vue';
import {
 f7,
 f7ready
} from 'framework7-vue';
import capacitorApp from './utils/capacitor-app.js';

import {
 Plugins
} from '@capacitor/core';
const {
 SplashScreen
} = Plugins;

SplashScreen.hide();

export default defineComponent({
 setup() {

  const f7Params = {
   name: 'Otokonime',
   theme: 'md',
   darkMode: true,
   colors: {
    primary: '#6A3DE8'
   },
   routes,
   statusbar: {
    enabled: true,
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
    androidBackgroundColor: '#1C1B1E',
    androidTextColor: 'white',
   }
  }

  onMounted(() => {
   f7ready(() => {
    capacitorApp.init(f7);
   });
  });

  return () => (
   <f7-app {...f7Params}>
  <f7-view main class="safe-areas" url="/"></f7-view>
 </f7-app>
  )
 }
});