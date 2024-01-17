<template>
  <div class="list">
    <div v-for="dog in dogs" :key="dog.id">
      <SingleDog :dog="dog" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from "vue";
import SingleDog from "./SingleDog.vue";

const props = defineProps(["dogs"]);
</script>

<style>
.list {
  display: inline-grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

@media screen and (max-width: 1275px) {
  .list {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 845px) {
  .list {
    grid-template-columns: 1fr;
  }
}
</style>
