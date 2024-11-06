import { createApp } from "vue";
import App from "./App.vue";
import Step1 from "./components/Step1.vue";
import Step2 from "./components/Step2.vue";
import SummaryData from "./components/Summary.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/step1",
    name: "Step-1",
    component: Step1,
  },
  {
    path: "/step2",
    name: "Step-2",
    component: Step2,
  },
  {
    path: "/summary",
    name: "SummaryData",
    component: SummaryData,
  },
  {
    path: "/",
    redirect: "/step1",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
