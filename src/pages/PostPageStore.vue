<template>
  <div>
    <h1>Page with posts</h1>
    <post-form @create="createPost" />
    <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostList,
    PostForm,
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
    }),
    ...mapActions({
      fetch: "post/fetch",
    }),
    createPost(post) {
      this.posts.push(post);
    },
    removePost() {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

  },
  mounted(){
this.fetch()
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
  },
};
</script>

<style>

</style>
