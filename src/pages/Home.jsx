import {
 f7
} from 'framework7-vue';

export default () => {
 return (
  <f7-page>
      <f7-navbar transparent>
      <f7-nav-left>
        <f7-link icon-material="menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Otokonime</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-material="search" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
  <f7-block-title medium>Currently Airing</f7-block-title>
  <f7-block>
   <swiper-container
   space-between={23}
   slides-per-view={2}
   >
    <swiper-slide className="grid grid-cols-1 grid-gap ripple">
    <img src="https://cdn.myanimelist.net/images/anime/1907/135919l.jpg" style="width: 100%; height: auto; aspect-ratio: 9/13.5; border-radius: 1rem" />
    <strong style="text-align: center">Gundam Build Metaverse</strong>
      </swiper-slide>
    <swiper-slide className="grid grid-cols-1 grid-gap ripple">
    <img src="https://cdn.myanimelist.net/images/anime/1800/136501l.jpg" style="width: 100%; height: auto; aspect-ratio: 9/13.5; border-radius: 1rem" />
    <strong style="text-align: center">Keikenzumi na Kimi to, Keiken Zero na Ore ga</strong>
      </swiper-slide>
    <swiper-slide className="grid grid-cols-1 grid-gap ripple">
    <img src="https://cdn.myanimelist.net/images/anime/1100/138338l.jpg" style="width: 100%; height: auto; aspect-ratio: 9/13.5; border-radius: 1rem" />
    <strong style="text-align: center">Tate no Yuusha no Nariagari Season 3</strong>
      </swiper-slide>
    </swiper-container>
    </f7-block>
  <f7-block-title medium>Finished Airing</f7-block-title>
  <f7-block>
   <swiper-container
   space-between={23}
   slides-per-view={2}
   >
    <swiper-slide className="grid grid-cols-1 grid-gap ripple">
    <img src="https://cdn.myanimelist.net/images/anime/1907/135919l.jpg" style="width: 100%; height: auto; aspect-ratio: 9/13.5; border-radius: 1rem" />
    <strong style="text-align: center">Gundam Build Metaverse</strong>
      </swiper-slide>
    <swiper-slide className="grid grid-cols-1 grid-gap ripple">
    <img src="https://cdn.myanimelist.net/images/anime/1800/136501l.jpg" style="width: 100%; height: auto; aspect-ratio: 9/13.5; border-radius: 1rem" />
    <strong style="text-align: center">Keikenzumi na Kimi to</strong>
      </swiper-slide>
    <swiper-slide className="grid grid-cols-1 grid-gap ripple">
    <img src="https://cdn.myanimelist.net/images/anime/1100/138338l.jpg" style="width: 100%; height: auto; aspect-ratio: 9/13.5; border-radius: 1rem" />
    <strong style="text-align: center">Tate no Yuusha no Nariagari Season 3</strong>
      </swiper-slide>
    </swiper-container>
    </f7-block>

 </f7-page>
 );
};