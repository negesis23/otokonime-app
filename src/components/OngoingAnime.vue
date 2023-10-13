<template>
 <f7-block>
  <swiper-container
   :space-between="18"
   :slides-per-view="2">
   <swiper-slide v-for="_ in ongoing" style="overflow: hidden">
    <a class="ripple" style="
     overflow: hidden;
     position: relative;
     display: flex;
     flex-direction: column;
     gap: 0.65rem;
     aspect-ratio: 9/16;
     ">
     <div style="
      position: relative;
      overflow: hidden;
      aspect-ratio: 9/13;
      border-radius: 0.8rem;
      ">
      <img :src="_.image" :alt="_.title" style="
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      ">
     </div>
     <span style="
      color: var(--f7-text-color);
      font-weight: 500;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      ">
      {{_.title}}
     </span>
    </a>
   </swiper-slide>
  </swiper-container>
 </f7-block>

 <!--
                <f7-list media-list>
                <f7-list-item
               v-for="_ in ongoing"
               link="_.animeId"
               :title="_.title"
               :subtitle="_.episode"
               :text="_.animeId"
               chevron-center>
               <template #media>
                <div style="border-radius: 8px;
          overflow: hidden;
           width: 60px;
           aspect-ratio: 9/13">
               <img
               style="object-fit: cover;
           width: 100%;
          height: 100%;
           "
               :src="_.image"
               />
                </div>
               </template>
                </f7-list-item>
               </f7-list>
               -->
</template>

<style>
 ongoing-item-card {}
</style>

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
 }, {
  "title": "Honghuang Ling Zun",
  "animeId": "/anime/2133/honghuang-ling-zun/episode/13",
  "image": "https://cdn.myanimelist.net/images/anime/1098/138327l.jpg",
  "episode": "Ep 13 / ?"
 }, {
  "title": "Sanshiliu Qi",
  "animeId": "/anime/2331/sanshiliu-qi/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1531/138885l.jpg",
  "episode": "Ep 2 / 13"
 }, {
  "title": "Ban Shen Zhi Jing",
  "animeId": "/anime/1953/ban-shen-zhi-jing/episode/19",
  "image": "https://cdn.myanimelist.net/images/anime/1260/136486l.jpg",
  "episode": "Ep 19 / 20"
 }, {
  "title": "Hirogaru Sky! Precure",
  "animeId": "/anime/1768/hirogaru-sky-precure/episode/35",
  "image": "https://cdn.myanimelist.net/images/anime/1688/132531l.jpg",
  "episode": "Ep 35 / ?"
 }, {
  "title": "Xiuluo Wu Shen",
  "animeId": "/anime/2299/xiuluo-wu-shen/episode/4",
  "image": "https://cdn.myanimelist.net/images/anime/1949/126777l.jpg",
  "episode": "Ep 4 / 16"
 }, {
  "title": "Anhe Zhuan",
  "animeId": "/anime/2097/anhe-zhuan/episode/12",
  "image": "https://cdn.myanimelist.net/images/anime/1315/124068l.jpg",
  "episode": "Ep 12 / 26"
 }, {
  "title": "Zhen Wu Dianfeng 2nd Season",
  "animeId": "/anime/1945/zhen-wu-dianfeng-2nd-season/episode/39",
  "image": "https://cdn.myanimelist.net/images/anime/1877/135536l.jpg",
  "episode": "Ep 39 / 52"
 }, {
  "title": "Watashi no Oshi wa Akuyaku Reijou.",
  "animeId": "/anime/2223/watashi-no-oshi-wa-akuyaku-reijou/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1531/137711l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Jue Shi Wu Hun",
  "animeId": "/anime/5/jue-shi-wu-hun/episode/313",
  "image": "https://cdn.myanimelist.net/images/anime/1183/110438l.jpg",
  "episode": "Ep 313 / 360"
 }, {
  "title": "Mo Zhuang Chuanshuo",
  "animeId": "/anime/2103/mo-zhuang-chuanshuo/episode/19",
  "image": "https://cdn.myanimelist.net/images/anime/1145/137863l.jpg",
  "episode": "Ep 19 / 40"
 }, {
  "title": "Xi Xing Ji: Nian Fan",
  "animeId": "/anime/2096/xi-xing-ji-nian-fan/episode/14",
  "image": "https://cdn.myanimelist.net/images/anime/1628/137502l.jpg",
  "episode": "Ep 14 / 52"
 }, {
  "title": "Paradox Live the Animation",
  "animeId": "/anime/2166/paradox-live-the-animation/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1640/134701l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Zhe Tian",
  "animeId": "/anime/1942/zhe-tian/episode/26",
  "image": "https://cdn.myanimelist.net/images/anime/1162/135727l.jpg",
  "episode": "Ep 26 / 53"
 }]
</script>