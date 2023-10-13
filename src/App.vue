<template>
 <f7-app v-bind="f7Params">
  <f7-views tabs>
   <f7-toolbar bottom tabbar>
    <f7-link tab-link="#home" tab-link-active>
     <f7-icon material="home"></f7-icon>
    </f7-link>
    <f7-link tab-link="#explore">
     <f7-icon material="explore"></f7-icon>
    </f7-link>
    <f7-link tab-link="#favorites">
     <f7-icon material="favorite"></f7-icon>
    </f7-link>
    <f7-link tab-link="#favorites">
     <f7-icon material="settings"></f7-icon>
    </f7-link>
   </f7-toolbar>

   <f7-view tab id="home" url="/" tab-active main></f7-view>
   <f7-view tab id="explore" url="/explore/"></f7-view>
   <f7-view tab id="favorites" url="/favorites/"></f7-view>
  </f7-views>
 </f7-app>
</template>

<script setup>
 import {
  onMounted
 } from 'vue';
 import {
  f7,
  f7ready
 } from 'framework7-vue';
 import {
  getDevice
 } from 'framework7/lite-bundle';
 import routes from './routes';
 import capacitorApp from './utils/capacitor-app';

 const device = getDevice();

 const f7Params = {
  name: 'Otokonime',
  theme: 'md',
  darkMode: true,
  colors: {
   primary: '#6A3DE8'
  },
  routes,
  touch: {
   iosTouchRipple: true
  },
  input: {
   scrollIntoViewOnFocus: device.capacitor,
   scrollIntoViewCentered: device.capacitor,
  },
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
   if (device.capacitor) {
    capacitorApp.init(f7);
   }
  });
 });

</script>