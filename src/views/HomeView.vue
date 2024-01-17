<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="dogs.length">
      <DogList :dogs="dogs" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import DogList from "../components/DogList.vue";
import getDogs from "../composables/getDogs";
export default {
  name: "HomeView",
  components: { DogList },
  setup() {
    const { dogs, error, load } = getDogs();

    load();

    return { dogs, error };
  },
};
</script>
