import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },

  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        // 不須加"/"
        component: () => import("../views/Products.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/Orders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/Coupons.vue"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("../views/UserBoard.vue"),
    children: [
      {
        path: "cart",
        component: () => import("../views/UserCart.vue"),
      },
      {
        path: "myfavs",
        component: () => import("../views/MyFav.vue"),
      },
      {
        path: "product",
        component: () => import("../views/ProductsList.vue"),
      },
      {
        path: "product/:productId",
        component: () => import("../views/UserProduct.vue"),
      },
      {
        path: "checkout/:orderId",
        component: () => import("../views/UserCheckout.vue"),
      },
      {
        path: "finish",
        component: () => import("../views/UserFinish.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
