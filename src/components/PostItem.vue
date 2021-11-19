<template>
  <div class="post">
    <h3>{{post.id}}</h3>
    <div><span style="color: red">Title:</span>{{ post.title }}</div>
    <div><span style="color: red">Body:</span>{{ post.body }}</div>
    <div class="post_vbts">
      <user-button :id='post.id' @click="$router.push(`/posts/${post.id}`)">Comments</user-button>
      <user-button @click="$emit('remove', post)">Delete</user-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 5px solid rgba(99, 107, 164, 0.66);
  margin-top: 20px;
  display: block;
}
.post_vbts {
  display: flex;
}
</style>
