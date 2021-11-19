<template>
  <div>
    <h1>Page with posts</h1>
    <post-form />
    <post-list :posts="posts" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
    <div class="page_wrapper">
      <div
        v-for="number in totalPages"
        :key="number"
        @click="changePage(number)"
        class="page"
        :class="{ current_page: page === number }"
      >
        {{ number }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { useFetch } from "@/hooks/useFetch";

export default {
  components: { PostList, PostForm },
  data() {
    return {};
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = useFetch(10);
    return {
      posts,
      totalPages,
      isPostsLoading,
    };
  },
};
</script>

<style>
.page_wrapper {
  display: flex;
  margin-top: 10px;
}
.page {
  border: 3px solid rgba(99, 107, 164, 0.66);
  padding: 10px;
}
.current_page {
  border: 4px solid grey;
}
</style>
