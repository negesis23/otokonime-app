<template>
 <f7-app name="Otokonime" :routes="routes" theme="md" darkMode="auto">
  <f7-view main url="/" />
 </f7-app>
</template>

<script setup>
 import {
  f7App,
  f7View
 } from 'framework7-vue';
 import routes from './routes';
</script>