<template>
 <f7-app v-bind="f7Params">
  <f7-view main url="/" />
 </f7-app>
</template>

<script setup>
 import {
  onMounted
 } from 'vue';
 import {
  f7ready
 } from 'framework7-vue';
 import {
  getDevice
 } from 'framework7/lite-bundle';
 import capacitorApp from './utils/capacitor-app';
 import Theme from './utils/theme';
 import routes from './routes';

 const device = getDevice();

 const f7Params = {
  name: 'Otokonime',
  theme: 'md',
  darkMode: true,
  routes,
  input: {
   scrollIntoViewOnFocus: device.capacitor,
   scrollIntoViewCentered: device.capacitor,
  },
  statusbar: {
   iosOverlaysWebView: true,
   androidOverlaysWebView: false,
  }
 }

 onMounted(() => {
  f7ready((f7) => {
   Theme.init();
   if (device.capacitor) {
    capacitorApp.init(f7);
   }
  });
 });

</script>