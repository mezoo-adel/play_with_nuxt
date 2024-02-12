import { useTesting } from "~/composables/useTesting";

export default defineNuxtRouteMiddleware((to, from) => {
  const { logHi } = useTesting();
  logHi();
  console.log("from middleware we're loggin where we're going to %c"+to.name, "color:blue");
});
