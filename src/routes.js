import Home from "./pages/Home.vue";

export default [{
 path: "/",
 component: Home,
},
 {
  path: "/about/",
  asyncComponent: () => import("./pages/About.vue"),
 },
 {
  path: "(.*)",
  asyncComponent: () => import("./pages/404.vue"),
 },
];