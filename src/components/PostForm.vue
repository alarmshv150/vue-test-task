<template>
  <form @submit.prevent class="form">
    <h4>Post creation</h4>
    <user-input v-model="post.title" type="text" placeholder="title"> </user-input>
    <user-input v-model="post.body" type="text" placeholder="body">
    </user-input>
    <user-button @click="createPost" class="btn">Create</user-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: block;
  margin-top: 5px;

}
.btn{
  align-self: flex-end;
  margin-top: 10px;
}
</style>
