<template>
 <f7-block-title class="flex flex-row items-center justify-between text-[var(--f7-text-color)]" medium>
  <h2>
   {{title}}
  </h2>
  <f7-link v-if="link" color="primary" :href="linkHref" class="text-sm">
   {{linkText || 'Lihat semua'}}
  </f7-link>
 </f7-block-title>
</template>
<script>
 export default {
  props: {
   title: String,
   link: Boolean,
   linkText: String,
   linkHref: String
  }
 }
 </script>