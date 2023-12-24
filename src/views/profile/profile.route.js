export default {
  routes: [
    {
      path: "/profile",
      name: "profile",
      component: () => import("./Index.vue"),
    },
  ],
};
