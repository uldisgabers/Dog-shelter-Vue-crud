<template>
  <h1>DOG SHELTER</h1>
  <div class="nav">
    <router-link class="link" to="/">HOME</router-link>
    <router-link class="link" to="/about">ABOUT</router-link>
    <router-link class="link" to="/new-dog">NEW DOG</router-link>
  </div>
  <div class="router-view">
    <router-view />
  </div>
  <FooterInfo class="footer" />
</template>

<script>
import FooterInfo from "./components/FooterInfo.vue";

export default {
  components: { FooterInfo },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.footer {
  bottom: 0;
}
.router-view {
  padding-top: 1rem;
  max-width: 1300px;
  margin: 0 auto;
}
.nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  background: rgb(248, 189, 121);
  border-radius: 8px;
  padding: 8px;
  transition: 0.4s;
}
.link:hover {
  background: rgb(253, 174, 84);
}
</style>
