<template>
 <f7-block>
  <swiper-container
   :space-between="18"
   :slides-per-view="2">
   <swiper-slide v-for="_ in ongoing">
    <a class="relative group flex flex-col gap-2">
     <div class="relative overflow-hidden aspect-[9/12] rounded-xl p-1.5">
      <img :src="_.image" :alt="_.title" class="object-cover w-full h-full absolute inset-0 transition duration-200 ease-in-out transform group-hover:scale-105 group-hover:-rotate-1" loading="lazy" />
      <f7-chip :text="_.episode"></f7-chip>
     </div>
     <h3 class="font-medium line-clamp-2">
      {{_.title}}
     </h3>
    </a>
   </swiper-slide>
  </swiper-container>
 </f7-block>
</template>

<script setup>
 const ongoing = [{
  "title": "Uma Musume: Pretty Derby Season 3",
  "animeId": "/anime/2220/uma-musume-pretty-derby-season-3/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1867/137974l.jpg",
  "episode": "Ep 2 / 13"
 }, {
  "title": "Di Yi Xulie",
  "animeId": "/anime/2075/di-yi-xulie/episode/14",
  "image": "https://cdn.myanimelist.net/images/anime/1699/136592l.jpg",
  "episode": "Ep 14 / 16"
 }, {
  "title": "Kage no Jitsuryokusha ni Naritakute! 2nd Season",
  "animeId": "/anime/2186/kage-no-jitsuryokusha-ni-naritakute-2nd-season/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1938/138295l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Bullbuster",
  "animeId": "/anime/2174/bullbuster/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1074/138192l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Konyaku Haki sareta Reijou wo Hirotta Ore ga, Ikenai Koto wo Oshiekomu",
  "animeId": "/anime/2196/konyaku-haki-sareta-reijou-wo-hirotta-ore-ga-ikenai-koto-wo-oshiekomu/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1142/137572l.jpg",
  "episode": "Ep 2 / ?"
 }]
</script>