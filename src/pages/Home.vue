<template>
 <f7-page>
  <f7-block-title>Navigation</f7-block-title>
  <f7-list>
   <f7-list-item link="/about/" title="About"></f7-list-item>
   <f7-list-item link="/404/" title="404"
    ></f7-list-item>
  </f7-list>

 </f7-page>
</template>

<script setup>
 import {
  f7List,
  f7ListItem
 } from 'framework7-vue';
</script>