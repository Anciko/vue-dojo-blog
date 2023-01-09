import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetailView from "../views/PostDetailView.vue";
import PostCreateView from "../views/PostCreateView.vue";
import TagView from "../views/TagView.vue";
import RealTimeData from '../views/RealTimeData.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/posts/:id',
      name: 'postdetails',
      component: PostDetailView,
      props: true
    },
    {
      path: '/posts/create',
      name: 'postcreate',
      component: PostCreateView
    },
    {
      path: '/tags/:tag',
      name: "tags",
      component: TagView
    },
    {
      path: '/realtime-data',
      name: 'realtimedata',
      component: RealTimeData
    }
  ],
});

export default router;
