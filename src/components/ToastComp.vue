<template>
  <div class="toast">
    <h5>{{ alertText }}</h5>
    <p>{{ smallDesc }}</p>
    <button @click="closeToast" class="close-button">X</button>
  </div>
</template>

<script>
export default {
  name: "ToastComp",
  props: {
    alertText: {
      type: String,
      default: "Deu alguma coisa ai.",
    },
    smallDesc: {
      type: String,
      default: "Deu isso por causa disso e isso",
    },
    isShow: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closeToast() {
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
.toast {
  position: relative;
  border-radius: 0.4rem;
  padding: 2rem 0.7rem;
  background-color: rgb(119, 201, 119);
  color: var(--font-default);
  width: 20%;
  margin: auto;
}

.close-button {
  position: absolute;
  border: none;
  padding: 0.5rem;
  font-size: 0.7rem;
  border-radius: 100%;
  background-color: transparent;
  top: 0.3rem;
  right:  0.3rem;
  color: var(--font-default);
  transition: var(--default-transition);
}

.close-button:hover {
  background-color: #fff4;
}
</style>