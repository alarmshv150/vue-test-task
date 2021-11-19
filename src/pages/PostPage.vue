<template>
  <div>
    <h1>Page with posts</h1>
    <post-form @create="createPost" />
    <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
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
import axios from "axios";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      page: 1,
      totalPages: 0,
      limit: 10,
      isPostsLoading:false,
      
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    changePage(number) {
      this.page = number;
      this.fetch();
    },

    async fetch() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
       } catch (e) {
        console.log("error");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetch();
   },
};
</script>

<style scoped>
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
