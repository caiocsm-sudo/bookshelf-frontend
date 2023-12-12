<template>
  <div>
    <section class="main-section">
      <h2>Bookshelf, the best books of all time, made for readers like you & me</h2>
      <p>Muito bacana né pessoal hahahahhaha</p>
      <button @click="showToast">Mostra o pinto</button>
      <router-link to="/book/10">
        <a href="#">Here</a>
      </router-link>
    </section>
    <ToastComp v-if="show" :isShow="show" @close="closeToast"></ToastComp>
  </div>
</template>

<script>
import ToastComp from "@/components/ToastComp.vue";

export default {
  components: {
    ToastComp,
  },
  data() {
    return {
      show: false,
      tips: {
        slot: "react children equivalent. better for content",
        prop: "the same as react props. better for component behaviour"
      },
    }
  },
  methods: {
    showToast() {
      this.show = true;
    },
    closeToast() {
      this.show = false;
    }
  }

}
</script>

<style></style>
