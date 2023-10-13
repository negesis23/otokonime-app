<template>
 <f7-page>
  <BlockTitle title="Seasons" />
  <f7-block>
   <swiper-container
    :space-between="12"
    :slides-per-view="3">
    <swiper-slide v-for='_ in seasons'>
     <f7-button round small tonal>{{_.genreName}}</f7-button>
    </swiper-slide>
   </swiper-container>
  </f7-block>

  <BlockTitle title="Currently Airing" link />
  <OngoingAnime />


  <BlockTitle title="Finished Airing" link />
  <OngoingAnime />

 </f7-page>
</template>


<script setup>
 import BlockTitle from '../components/BlockTitle.vue';
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