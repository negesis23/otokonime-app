import Home from "./pages/Home";

export default [{
 path: "/",
 component: Home,
},
 {
  path: "/about/",
  asyncComponent: () => import("./pages/About"),
 },
 {
  path: "(.*)",
  asyncComponent: () => import("./pages/404"),
 },
];