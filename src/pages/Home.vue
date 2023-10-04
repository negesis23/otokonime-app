<template>
 <f7-page>
  <f7-block strong inset>
   <f7-button fill round>Button</f7-button>
  </f7-block>

  <f7-list inset strong>
   <f7-list-item link="/about/" title="About"></f7-list-item>
   <f7-list-item link="/404/" title="404"
    ></f7-list-item>
  </f7-list>

 </f7-page>
</template>

<script setup>
 import {
  f7List,
  f7ListItem,
  f7Button,
 } from 'framework7-vue';

</script>