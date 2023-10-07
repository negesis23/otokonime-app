import Home from "./pages/Home";

export default [{
 path: "/",
 component: Home,
},
 {
  path: "/chat/",
  asyncComponent: () => import("./pages/Chat.vue"),
 },
 {
  path: "(.*)",
  asyncComponent: () => import("./pages/404"),
 },
];