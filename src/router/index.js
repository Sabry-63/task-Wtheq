import payment from "@/views/payment/payment.route";
import profile from "@/views/profile/profile.route";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      redirect: { path: "/profile" },
      children: [...profile.routes, ...payment.routes],
    },
  ],
});

export default router;
