<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue</div>
    <div class="navbar_bts">
      <user-button class="navbar_bt" style="color:blue" @click="$router.push('/posts')"
        >Posts</user-button
      >
      <user-button class="navbar_bt" @click="$router.push('/about')"
        >About</user-button
      >
      <user-button class="navbar_bt" style="color:red" @click="$router.push('/store')"
        >Store</user-button
      >
      <user-button class="navbar_bt" style="color:yellow" @click="$router.push('/composition')"
        >Composition</user-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: gray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0px 30px;
}
.navbar_bts {
  margin-left: auto;
  
}
.navbar_bt {
  
  margin-left: 20px;
}
</style>
