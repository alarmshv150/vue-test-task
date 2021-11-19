import axios from "axios";
import { ref, onMounted } from "vue";

export function useFetch(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostLoading = ref(false);

  const fetch = async () => {
    try {
      isPostLoading.value = true;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        }
      );
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = response.data;
    } catch (e) {
      console.log("error");
    } finally {
      isPostLoading.value = false;
    }
  };
  onMounted(fetch);
  return {
    posts,
    isPostLoading,
    totalPages,
  };
}
