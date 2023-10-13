<template>
 <f7-block>
  <swiper-container
   :space-between="18"
   :slides-per-view="2">
   <swiper-slide v-for="_ in ongoing">
    <a class="relative group flex flex-col gap-2">
     <div class="relative overflow-hidden aspect-[9/12] rounded-2xl p-1.5">
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
  "title": "Rail Romanesque 2",
  "animeId": "/anime/2207/rail-romanesque-2/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1214/137093l.jpg",
  "episode": "Ep 2 / 13"
 }, {
  "title": "Emo Faze",
  "animeId": "/anime/2316/emo-faze/episode/5",
  "image": "https://cdn.myanimelist.net/images/anime/1053/121486l.jpg",
  "episode": "Ep 5 / 24"
 }, {
  "title": "Dubu Wangu",
  "animeId": "/anime/2318/dubu-wangu/episode/7",
  "image": "https://cdn.myanimelist.net/images/anime/1720/138642l.jpg",
  "episode": "Ep 7 / 40"
 }, {
  "title": "Ni Tian Zhizun",
  "animeId": "/anime/13/ni-tian-zhizun/episode/240",
  "image": "https://cdn.myanimelist.net/images/anime/1557/117031l.jpg",
  "episode": "Ep 240 / 260"
 }, {
  "title": "Bai Lian Cheng Shen",
  "animeId": "/anime/1566/bai-lian-cheng-shen/episode/51",
  "image": "https://cdn.myanimelist.net/images/anime/1524/127614l.jpg",
  "episode": "Ep 51 / 52"
 }, {
  "title": "Da Zhu Zai Nian Fan",
  "animeId": "/anime/1999/da-zhu-zai-nian-fan/episode/18",
  "image": "https://cdn.myanimelist.net/images/anime/1492/136621l.jpg",
  "episode": "Ep 18 / 52"
 }, {
  "title": "Wanmei Shijie",
  "animeId": "/anime/1197/wanmei-shijie/episode/132",
  "image": "https://cdn.myanimelist.net/images/anime/1793/124106l.jpg",
  "episode": "Ep 132 / 182"
 }, {
  "title": "Under Ninja",
  "animeId": "/anime/2222/under-ninja/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1915/137896l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Ojou to Banken-kun",
  "animeId": "/anime/2203/ojou-to-banken-kun/episode/3",
  "image": "https://cdn.myanimelist.net/images/anime/1833/138479l.jpg",
  "episode": "Ep 3 / 13"
 }, {
  "title": "Bikkurimen",
  "animeId": "/anime/2170/bikkurimen/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1972/138478l.jpg",
  "episode": "Ep 2 / 12"
 }]
</script>