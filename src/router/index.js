import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import About from "@/pages/About";
import PostCommentsPage from "@/pages/PostCommentsPage";
import PostPage from "@/pages/PostPage";
import PostPageComposition from "@/pages/PostPageComposition";
import PostPageStore from "@/pages/PostPageStore";

const routes = [
  { path: "/", component: Main },
  { path: "/about", component: About },
  { path: "/posts", component: PostPage },
  { path: "/posts/:id", component: PostCommentsPage},
  { path: "/composition", component: PostPageComposition },
  { path: "/store", component: PostPageStore },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
