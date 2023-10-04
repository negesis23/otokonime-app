<template>
 <f7-app v-bind="f7Params">
  <f7-view main url="/" />
 </f7-app>
</template>

<script setup>
 import {
  f7App,
  f7View
 } from 'framework7-vue';
 import routes from './routes';

 const f7Params = {
  name: 'Otokonime',
  theme: 'md',
  darkMode: 'auto',
  routes,
 }

</script>

<style scoped>
* {
  user-select: none;
}
</style>
