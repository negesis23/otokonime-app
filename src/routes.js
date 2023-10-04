import Home from "./pages/Home.vue";

export default [{
 path: "/",
 component: Home,
},
 {
  path: "/about/",
  asyncComponent: () => import("./pages/About.vue"),
  options: {
   animate: false
  }
 },
 {
  path: "(.*)",
  asyncComponent: () => import("./pages/404.vue"),
 },
];