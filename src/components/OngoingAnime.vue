<template>
 <f7-block>
  <swiper-container
   :space-between="18"
   :slides-per-view="2">
   <swiper-slide v-for="_ in ongoing" style="overflow: hidden">
    <a class="ripple" style="
     color: var(--f7-text-color)
     overflow: hidden;
     position: relative;
     display: flex;
     flex-direction: column;
     gap: 0.65rem;
     height: 100%;
     ">
     <div class="block inset block-outline" style="
      position: relative;
      overflow: hidden;
      padding: 0px;
      margin: 0px;
      aspect-ratio: 9/13.5;
      ">
      <img :src="_.image" :alt="_.title" style="
      object-fit: cover;
      width: 100%;
      height: 100%;
      ">
     </div>
     <span style="
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
  "title": "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su",
  "animeId": "/anime/2211/shangri-la-frontier-kusoge-hunter-kamige-ni-idoman-to-su/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1591/137973l.jpg",
  "episode": "Ep 2 / ?"
 }, {
  "title": "Gaishi Dizun",
  "animeId": "/anime/2092/gaishi-dizun/episode/22",
  "image": "https://cdn.myanimelist.net/images/anime/1885/136527l.jpg",
  "episode": "Ep 22 / 52"
 }, {
  "title": "Xian Wu Chuan 2",
  "animeId": "/anime/2293/xian-wu-chuan-2/episode/3",
  "image": "https://cdn.myanimelist.net/images/anime/1758/138643l.jpg",
  "episode": "Ep 3 / ?"
 }, {
  "title": "Qing Lian Jian Xian Chuan",
  "animeId": "/anime/1939/qing-lian-jian-xian-chuan/episode/52",
  "image": "https://cdn.myanimelist.net/images/anime/1806/135323l.jpg",
  "episode": "Ep 52 / 54"
 }, {
  "title": "Honghuang Ling Zun",
  "animeId": "/anime/2133/honghuang-ling-zun/episode/12",
  "image": "https://cdn.myanimelist.net/images/anime/1098/138327l.jpg",
  "episode": "Ep 12 / ?"
 }]
</script>