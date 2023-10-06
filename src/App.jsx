import routes from './routes';
import {
 defineComponent,
 onMounted
} from 'vue';
import {
 f7,
 f7ready
} from 'framework7-vue';
import {
 getDevice
} from 'framework7/lite-bundle';
import capacitorApp from './utils/capacitor-app.js';

export default defineComponent({
 setup() {
  const device = getDevice();

  const f7Params = {
   name: 'Otokonime',
   theme: 'md',
   darkMode: true,
   colors: {
    primary: '#6A3DE8'
   },
   routes,
   input: {
    scrollIntoViewOnFocus: device.capacitor,
    scrollIntoViewCentered: device.capacitor,
   },
   statusbar: {
    enabled: true,
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
    androidBackgroundColor: '#252329',
    androidTextColor: 'white',
   }
  }

  onMounted(() => {
   f7ready(() => {
    if (device.capacitor) {
     capacitorApp.init(f7);
    }
   });
  });

  return () => (
   <f7-app {...f7Params}>
  <f7-view main class="safe-areas" url="/"></f7-view>
 </f7-app>
  )
 }
});