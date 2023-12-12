<template>
  <header class="header primary-fnt-color">
    <RouterLink to="/">
      <h1 class="app-title">
        <slot></slot>
      </h1>
    </RouterLink>
    <nav class="nav-items">
      <ul>
        <li v-for="(item, index) in navItems" :key="index">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </nav>
    <div class="input-search">
      <input type="text" v-model="search" name="search" class="default-search" placeholder="Search books" />
    </div>
    <div class="auth-buttons">
      <RouterLink to="/auth">
        <button class="default-btn">Log in</button>
        <button class="default-btn sign-in">Sign in</button>
      </RouterLink>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: ["Home", "Library", "Categories", "About"],
      loggedItems: ["Home", "My Books", "Browse"],
      search: "",
      loggedAvatar: {
        name: "",
        userImage: "",
        userBio: "",
      }
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  color: var(--font-dark);
  border-bottom: 1px solid #eeec;
}

.header .app-title {
  font-weight: 300;
  font-size: 1.8rem;
}

.header .nav-items ul {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header .nav-items ul li {
  align-items: center;
}

.auth-buttons button {
  margin: 0 0.3rem;
}

.sign-in {
  background-color: var(--primary-gray) !important;
  transition: var(--default-transition);
}

.sign-in:hover {
  background-color: var(--hover-gray) !important;
}

.default-search {
  padding: 0.5rem 0.2rem;
  width: 100%;
  background-color: transparent;
  border-radius: 0.2rem;
  border: 1px solid var(--third-green);
}

.input-search {
  width: 25%;
}
</style>
