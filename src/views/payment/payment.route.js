export default {
  routes: [
    {
      path: "/payment",
      name: "payment",
      component: () => import("./Index.vue"),
    },
  ],
};
