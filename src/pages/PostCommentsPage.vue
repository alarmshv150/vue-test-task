<template>
  <div>
    <div>
     <h1>ID: {{ $route.params.id }}</h1>
     <h1>{{post.title}}</h1>
     <p>{{post.body}}</p>
    </div>
    <div>
      <h3>Comments:</h3>
      <div 
        v-for="comment in comments" 
        :key="comment.id" 
        :id="comment.id" 
        :comment="comment">
        <h4>{{comment.id}}</h4>
        <h5>{{ comment.email }}</h5>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
 import axios from "axios"
export default {
data(){
   return{
  post:[],
  comments:[],
   }
 },
methods:{
  async getPost(id) {
   const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    this.post = response.data;
    },
  async getComments(id) {
   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    this.comments = response.data;
    }
 },
mounted(){
   this.getPost(this.$route.params.id);
   this.getComments(this.$route.params.id);
 }
}
</script>
<style scoped></style>
