<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "user-button",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: green;
  border: 5px solid rgba(99, 107, 164, 0.66);
}
</style>
