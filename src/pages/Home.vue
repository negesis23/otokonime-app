<template>
 <f7-page>
  <f7-block-title medium>Musim / Season</f7-block-title>
  <f7-block>
   <swiper-container
    :space-between="12"
    :slides-per-view="3">
    <swiper-slide v-for='_ in seasons'>
     <f7-button round small outline>{{_.genreName}}</f7-button>
    </swiper-slide>
   </swiper-container>
  </f7-block>

  <f7-block-title class="flex flex-row items-center justify-between" medium>
   <h2>
    Sedang Berlangsung
   </h2>
   <f7-link>
    Lihat semua
   </f7-link>
  </f7-block-title>
  <OngoingAnime />


  <f7-block-title class="flex flex-row items-center justify-between" medium>
   <h2>
    Berakhir / Selesai
   </h2>
   <f7-link>
    Lihat semua
   </f7-link>
  </f7-block-title>
  <OngoingAnime />


 </f7-page>
</template>


<script setup>
 import OngoingAnime from '../components/OngoingAnime.vue';

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