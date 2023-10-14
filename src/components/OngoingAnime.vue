<template>
 <f7-block>
  <swiper-container
   :space-between="18"
   :slides-per-view="2">
   <swiper-slide v-for="_ in ongoing">
    <a class="relative group flex flex-col gap-3">
     <div class="relative overflow-hidden aspect-[9/12.5] rounded-2xl p-1.5">
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
  "title": "Goblin Slayer II",
  "animeId": "/anime/2180/goblin-slayer-ii/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1100/138338l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Tate no Yuusha no Nariagari Season 3",
  "animeId": "/anime/2215/tate-no-yuusha-no-nariagari-season-3/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1188/136926l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Rail Romanesque 2",
  "animeId": "/anime/2207/rail-romanesque-2/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1214/137093l.jpg",
  "episode": "Ep 2 / 13"
 }, {
  "title": "Jiu Tian Xuan Di Jue 4",
  "animeId": "/anime/1941/jiu-tian-xuan-di-jue-4/episode/42",
  "image": "https://cdn.myanimelist.net/images/anime/1917/135677l.jpg",
  "episode": "Ep 42 / 52"
 }, {
  "title": "Jian Gu",
  "animeId": "/anime/1952/jian-gu/episode/38",
  "image": "https://cdn.myanimelist.net/images/anime/1800/136501l.jpg",
  "episode": "Ep 38 / ?"
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
  "title": "Ling Jian Zun 4th Season",
  "animeId": "/anime/1210/ling-jian-zun-4th-season/episode/326",
  "image": "https://cdn.myanimelist.net/images/anime/1972/108157l.jpg",
  "episode": "Ep 326 / 360"
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
  "title": "Rurouni Kenshin: Meiji Kenkaku Romantan (2023)",
  "animeId": "/anime/1981/rurouni-kenshin-meiji-kenkaku-romantan-2023/episode/15",
  "image": "https://cdn.myanimelist.net/images/anime/1599/136532l.jpg",
  "episode": "Ep 15 / 24"
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
 }, {
  "title": "Yuzuki-san Chi no Yonkyoudai.",
  "animeId": "/anime/2224/yuzuki-san-chi-no-yonkyoudai/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1194/138253l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Jujutsu Kaisen 2nd Season",
  "animeId": "/anime/1972/jujutsu-kaisen-2nd-season/episode/12",
  "image": "https://cdn.myanimelist.net/images/anime/1792/138022l.jpg",
  "episode": "Ep 12 / 23"
 }]
</script>