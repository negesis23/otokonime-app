<template>
 <f7-block>
  <swiper-container
   :space-between="19"
   :slides-per-view="2">
   <swiper-slide v-for="_ in finished">
    <a
     :href="_.animeId"
     class="group flex flex-col gap-2">
     <div class="relative overflow-hidden h-52 rounded-xl">
      <img
      :src="_.image"
      :alt="_.title"
      class="object-cover w-full h-full absolute inset-0 transition duration-200 group-hover:scale-105"
      loading="lazy" />
     </div>
     <div class="ripple relative overflow-hidden flex flex-col items-start">
      <div class="font-medium flex flex-row gap-1">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 text-yellow-400 h-5">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
       </svg>
       <span>{{_.episode}}</span>
      </div>
      <span class="line-clamp-2">
       {{_.title}}
      </span>
     </div>
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