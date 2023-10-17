<template>
 <f7-block>
  <swiper-container
   :space-between="19"
   :slides-per-view="2">
   <swiper-slide v-for="_ in ongoing">
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
      <div class="font-medium text-[var(--f7-theme-color)]">
       {{_.episode.replace(/Ep (\d+) \/ .*/, 'Episode $1')}}
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
 const ongoing = [{
  "title": "Qing Lian Jian Xian Chuan",
  "animeId": "/anime/1939/qing-lian-jian-xian-chuan/episode/54",
  "image": "https://cdn.myanimelist.net/images/anime/1806/135323l.jpg",
  "episode": "Ep 54 / 54"
 }, {
  "title": "Xian Wu Chuan 2",
  "animeId": "/anime/2293/xian-wu-chuan-2/episode/4",
  "image": "https://cdn.myanimelist.net/images/anime/1758/138643l.jpg",
  "episode": "Ep 4 / ?"
 }, {
  "title": "Wu Ying Sanqian Dao 2nd Season",
  "animeId": "/anime/2112/wu-ying-sanqian-dao-2nd-season/episode/18",
  "image": "https://cdn.myanimelist.net/images/anime/1233/138050l.jpg",
  "episode": "Ep 18 / 50"
 }, {
  "title": "Honghuang Ling Zun",
  "animeId": "/anime/2133/honghuang-ling-zun/episode/14",
  "image": "https://cdn.myanimelist.net/images/anime/1098/138327l.jpg",
  "episode": "Ep 14 / ?"
 }, {
  "title": "Jue Shi Wu Hun",
  "animeId": "/anime/5/jue-shi-wu-hun/episode/314",
  "image": "https://cdn.myanimelist.net/images/anime/1183/110438l.jpg",
  "episode": "Ep 314 / 360"
 }, {
  "title": "Houkago Shounen Hanako-kun",
  "animeId": "/anime/2184/houkago-shounen-hanako-kun/episode/1",
  "image": "https://cdn.myanimelist.net/images/anime/1530/138031l.jpg",
  "episode": "Ep 1 / 4"
 }, {
  "title": "Doupo Cangqiong: Nian Fan",
  "animeId": "/anime/1275/doupo-cangqiong-nian-fan/episode/66",
  "image": "https://cdn.myanimelist.net/images/anime/1419/126374l.jpg",
  "episode": "Ep 66 / 104"
 }, {
  "title": "One Piece",
  "animeId": "/anime/50/one-piece/episode/1079",
  "image": "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
  "episode": "Ep 1079 / ?"
 }, {
  "title": "Bokura no Ameiro Protocol",
  "animeId": "/anime/2171/bokura-no-ameiro-protocol/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1160/138465l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Buta no Liver wa Kanetsu Shiro",
  "animeId": "/anime/2175/buta-no-liver-wa-kanetsu-shiro/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1818/138383l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Potion-danomi de Ikinobimasu!",
  "animeId": "/anime/2205/potion-danomi-de-ikinobimasu/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1182/138184l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Kikansha no Mahou wa Tokubetsu desu",
  "animeId": "/anime/2193/kikansha-no-mahou-wa-tokubetsu-desu/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1816/138532l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Ragna Crimson",
  "animeId": "/anime/2206/ragna-crimson/episode/3",
  "image": "https://cdn.myanimelist.net/images/anime/1661/137709l.jpg",
  "episode": "Ep 3 / 24"
 }, {
  "title": "Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story",
  "animeId": "/anime/2216/tearmoon-teikoku-monogatari-dantoudai-kara-hajimaru-hime-no-tensei-gyakuten-story/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1628/137847l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Spy x Family Season 2",
  "animeId": "/anime/2214/spy-x-family-season-2/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1506/138982l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Hikikomari Kyuuketsuki no Monmon",
  "animeId": "/anime/2182/hikikomari-kyuuketsuki-no-monmon/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1032/137893l.jpg",
  "episode": "Ep 2 / 12"
 }, {
  "title": "Saihate no Paladin: Tetsusabi no Yama no Ou",
  "animeId": "/anime/2208/saihate-no-paladin-tetsusabi-no-yama-no-ou/episode/2",
  "image": "https://cdn.myanimelist.net/images/anime/1031/138515l.jpg",
  "episode": "Ep 2 / ?"
 }, {
  "title": "Detective Conan",
  "animeId": "/anime/1618/detective-conan-TW4pR/episode/1158",
  "image": "https://cdn.myanimelist.net/images/anime/7/75199l.jpg",
  "episode": "Ep 1158 / ?"
 }]
</script>