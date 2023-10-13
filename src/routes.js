import Home from "./pages/Home.vue";

export default [{
 path: "/",
 component: Home,
},
 {
  path: "/explore/",
  asyncComponent: () => import("./pages/Explore.vue"),
 },
 {
  path: "/favorites/",
  asyncComponent: () => import("./pages/Favorites.vue"),
 },


 {
  path: "(.*)",
  asyncComponent: () => import("./pages/404"),
 },
];