<template>
  <div class="app-div">
    <NavBar>{{ appName }}</NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      pageIndex: 0,
      appName: "Bitch.js",
    }
  }
}
</script>

<style>

</style>
