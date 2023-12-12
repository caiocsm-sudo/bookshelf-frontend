<template>
  <section class="book-complete-info">
    <div class="book-cover">
      <img id="cover-img" :src="imageSource" alt="book-cover">
      <div class="book-desc">
        <h3 id="book-title" class="book-name">{{ bookName }}</h3>
        <p class="optional book-description">{{ bookDescription }}</p>
      </div>
      <button class="default-btn" @click="comeHome">come home</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "book-view",
  data() {
    return {
      imageSource: "https://i.pinimg.com/564x/81/25/2a/81252a99aa6663921fe2722d18872b8c.jpg",
      bookName: "Vai tomar no cu",
      bookDescription: "Se fode demais esses filhos da puta",
    }
  },
  methods: {
    comeHome() {
      this.$router.push({ name: "home" });
    }
  },
  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>

<style scoped>
.book-complete-info {
  padding: 0.5rem;

}

.book-cover {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #0004;
  width: 30%;
  margin: auto;
}

.cover-img {
  height: 60%;
  border-radius: 0.3rem;
}

.book-desc {
  margin: 0.8rem 0 0.3rem 0;
}

.book-description {
  font-size: 0.8rem;
}

#book-title {
  font-size: 1rem;
}
</style>