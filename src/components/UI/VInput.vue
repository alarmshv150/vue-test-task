<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
  name: "user-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 150px;
  border: 5px solid rgba(99, 107, 164, 0.66);
  padding: 10px 15px;
  margin: 15px 0px 15px 0px;
}
</style>
