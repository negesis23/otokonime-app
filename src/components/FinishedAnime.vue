<template>
 <f7-block>
  <swiper-container
   :space-between="18"
   :slides-per-view="2">
   <swiper-slide v-for="_ in finished">
    <a class="relative group flex flex-col gap-3">
     <div class="relative overflow-hidden aspect-[9/12.5] rounded-2xl p-1.5">
      <img :src="_.image" :alt="_.title" class="object-cover w-full h-full absolute inset-0 transition duration-200 ease-in-out transform group-hover:scale-105 group-hover:-rotate-1" loading="lazy" />
      <f7-chip>
       <span class="text-lg">★</span>
       {{_.episode}}</f7-chip>
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
 const finished = [{
  "title": "Uma Musume: Pretty Derby - Road to the Top",
  "animeId": "/anime/1931/uma-musume-pretty-derby-road-to-the-top",
  "image": "https://cdn.myanimelist.net/images/anime/1102/135552l.jpg",
  "episode": "7.85"
 }, {
  "title": "Uma Musume: Pretty Derby - 1st Anniversary Special Animation",
  "animeId": "/anime/2271/uma-musume-pretty-derby-1st-anniversary-special-animation",
  "image": "https://cdn.myanimelist.net/images/anime/1424/121398l.jpg",
  "episode": "7.08"
 }, {
  "title": "Umayon Shinsaku Short Anime",
  "animeId": "/anime/2268/umayon-shinsaku-short-anime",
  "image": "https://cdn.myanimelist.net/images/anime/1294/127123l.jpg",
  "episode": "6.43"
 }, {
  "title": "Good Night World",
  "animeId": "/anime/2332/good-night-world",
  "image": "https://cdn.myanimelist.net/images/anime/1330/137476l.jpg",
  "episode": "?"
 }, {
  "title": "Uma Musume: Pretty Derby Season 2",
  "animeId": "/anime/2270/uma-musume-pretty-derby-season-2",
  "image": "https://cdn.myanimelist.net/images/anime/1447/114282l.jpg",
  "episode": "8.06"
 }, {
  "title": "Ao no Orchestra",
  "animeId": "/anime/1875/ao-no-orchestra",
  "image": "https://cdn.myanimelist.net/images/anime/1832/133754l.jpg",
  "episode": "7.06"
 }, {
  "title": "Ta Bu Dang Nuzhu Hen Duo Nian",
  "animeId": "/anime/1934/ta-bu-dang-nuzhu-hen-duo-nian",
  "image": "https://cdn.myanimelist.net/images/anime/1007/134843l.jpg",
  "episode": "6.87"
 }, {
  "title": "Umayon",
  "animeId": "/anime/2267/umayon",
  "image": "https://cdn.myanimelist.net/images/anime/1032/111641l.jpg",
  "episode": "6.31"
 }, {
  "title": "Wu Nao Monu",
  "animeId": "/anime/2011/wu-nao-monu",
  "image": "https://cdn.myanimelist.net/images/anime/1386/136705l.jpg",
  "episode": "6.35"
 }, {
  "title": "Duo Xuan Shi",
  "animeId": "/anime/2009/duo-xuan-shi",
  "image": "https://cdn.myanimelist.net/images/anime/1090/126770l.jpg",
  "episode": "?"
 }, {
  "title": "Zhen Yang Wushen",
  "animeId": "/anime/2014/zhen-yang-wushen",
  "image": "https://cdn.myanimelist.net/images/anime/1769/136525l.jpg",
  "episode": "?"
 }, {
  "title": "Uma Musume: Pretty Derby - BNW no Chikai",
  "animeId": "/anime/2269/uma-musume-pretty-derby-bnw-no-chikai",
  "image": "https://cdn.myanimelist.net/images/anime/1733/93479l.jpg",
  "episode": "7.13"
 }, {
  "title": "Uma Musume: Pretty Derby",
  "animeId": "/anime/2265/uma-musume-pretty-derby",
  "image": "https://cdn.myanimelist.net/images/anime/1683/91888l.jpg",
  "episode": "7.31"
 }, {
  "title": "Uma Musume: Pretty Derby PV",
  "animeId": "/anime/2266/uma-musume-pretty-derby-pv",
  "image": "https://cdn.myanimelist.net/images/anime/10/83024l.jpg",
  "episode": "6.59"
 }, {
  "title": "Uchi no Kaisha no Chiisai Senpai no Hanashi",
  "animeId": "/anime/1991/uchi-no-kaisha-no-chiisai-senpai-no-hanashi",
  "image": "https://cdn.myanimelist.net/images/anime/1984/136274l.jpg",
  "episode": "6.67"
 }, {
  "title": "Edens Zero 2nd Season",
  "animeId": "/anime/1880/edens-zero-2nd-season",
  "image": "https://cdn.myanimelist.net/images/anime/1872/137116l.jpg",
  "episode": "7.42"
 }, {
  "title": "Jitsu wa Ore, Saikyou deshita?",
  "animeId": "/anime/1971/jitsu-wa-ore-saikyou-deshita",
  "image": "https://cdn.myanimelist.net/images/anime/1963/138464l.jpg",
  "episode": "6.49"
 }, {
  "title": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
  "animeId": "/anime/1959/bleach-sennen-kessen-hen-ketsubetsu-tan",
  "image": "https://cdn.myanimelist.net/images/anime/1164/138058l.jpg",
  "episode": "8.95"
 }]
</script>