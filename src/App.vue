<template>
 <f7-app v-bind="f7Params">
  <f7-view main url="/"></f7-view>
 </f7-app>
</template>

<script setup>
 import routes from './routes';

 const f7Params = {
  name: 'Otokonime',
  theme: 'md',
  darkMode: true,
  colors: {
   primary: '#6A3DE8'
  },
  routes,
  touch: {
   disableContextMenu: true,
  },
  statusbar: {
   iosOverlaysWebView: true,
   androidOverlaysWebView: true,
   androidBackgroundColor: '#0000',
  }
 }

</script>