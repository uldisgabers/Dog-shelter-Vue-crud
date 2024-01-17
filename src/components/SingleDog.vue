<template>
  <router-link
    style="text-decoration: none; color: inherit"
    :to="{ name: 'DetailsView', params: { id: dog.id } }"
  >
    <div class="card">
      <div class="img-conatiner">
        <img class="photo" :src="dog.photo" alt="dog" />
      </div>
      <div class="dog-info">
        <h3 class="name">{{ dog.name }}</h3>
        <p class="breed">{{ dog.breed }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps(["dog"]);
</script>

<style scoped>
.card {
  max-width: 400px;
  width: 100%;
  max-height: 350px;
  height: 100%;
}
.img-conatiner {
  width: 100%;
  width: 400px;
  height: 100%;
  max-height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo {
  height: 100%;
  max-width: 600px;
}
.dog-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  bottom: 80px;
  background-color: rgba(177, 177, 177, 0.7);
}
.name {
  text-decoration: none;
  font-weight: bold;
  color: rgb(255, 255, 255);
  border: 3px solid white;
  padding: 0.5rem;
  border-radius: 2rem;
}
.breed {
  color: white;
  font-weight: bold;
}
</style>
