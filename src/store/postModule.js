import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    page: 1,
    limit: 10,
    totalPages: 0,
  }),
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsPostsLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPage = totalPages;
    },
  },
  actions: {
    async fetch({ state, commit }) {
      try {
        commit('setIsPostsLoading',true)
        const response = await axios.get(
          " https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(repsonse.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (e) {
        console.log("error");
      } finally {
        commit("setIsPostsLoading", false);
      }
    },
  },
  namespaced: true,
};
