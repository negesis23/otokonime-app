<template>
 <f7-page>
  <f7-navbar title="Otokonime">
   <f7-nav-right>
    <f7-link :icon-material="isDark ? 'light_mode': 'dark_mode'" @click="f7.store.dispatch('setIsDark', !isDark)"></f7-link>
   </f7-nav-right>
  </f7-navbar>

  <BlockTitle title="Jadwal Rilis" link-text="Lihat jadwal" />
  <f7-block>
   <swiper-container
    :space-between="14"
    :slides-per-view="3">
    <swiper-slide v-for="_ in ['All', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']">
     <f7-button outline small href="/schedule">{{_}}</f7-button>
    </swiper-slide>
   </swiper-container>
  </f7-block>


  <BlockTitle title="Sedang Tayang" link />
  <OngoingAnime />



  <BlockTitle title="Selesai Tayang" link />
  <FinishedAnime />

 </f7-page>
</template>


<script setup>
 import BlockTitle from '../components/BlockTitle.vue';
 import OngoingAnime from '../components/OngoingAnime.vue';
 import FinishedAnime from '../components/FinishedAnime.vue';
 import {
  f7,
  useStore,
 } from 'framework7-vue';

 const isDark = useStore('isDark');

 const seasons = [{
  "genreName": "Fall 1993",
  "genreId": "fall-1993"
 }, {
  "genreName": "Fall 1999",
  "genreId": "fall-1999"
 }, {
  "genreName": "Fall 2002",
  "genreId": "fall-2002"
 }, {
  "genreName": "Fall 2003",
  "genreId": "fall-2003"
 }, {
  "genreName": "Fall 2004",
  "genreId": "fall-2004"
 }]

</script>