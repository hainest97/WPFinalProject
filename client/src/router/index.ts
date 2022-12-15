import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/workouts",
      name: "workouts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/WorkoutsView.vue"),
    },
    {
      path: "/nutrition",
      name: "nutrition",
      component: () => import("../views/NutritionView.vue"),
    },
    {
      path: "/friends",
      name: "friends",
      component: () => import("../views/FriendsView.vue"),
    },
    {
      path: "/friendsearch",
      name: "friendsearch",
      component: () => import("../views/FriendSearchView.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/AccountView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
  ],
});

export default router;
