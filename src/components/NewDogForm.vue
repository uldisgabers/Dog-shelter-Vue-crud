<template>
  <div class="form-wrapper">
    <form @submit.prevent="handleSubmit" class="form">
      <label>Name:</label>
      <input required type="text" min="1" v-model="newDogObj.name" />

      <label>Age:</label>
      <input required type="number" v-model.number="newDogObj.age" />

      <label>Breed:</label>
      <input required type="text" v-model="newDogObj.breed" />

      <label>About the dog:</label>
      <input required type="text" v-model="newDogObj.about" />

      <label>Photo URL:</label>
      <input required type="text" v-model="newDogObj.photo" />

      <button class="button">ADD</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

let newDogObj = ref({
  name: "",
  age: "",
  breed: "",
  about: "",
  photo: "",
});

const emit = defineEmits(["submitForm"]);

const handleSubmit = () => {
  emit("submitForm", newDogObj.value);
  newDogObj.value = {
    name: "",
    age: "",
    breed: "",
    about: "",
    photo: "",
  };
};
</script>

<style>
.form-wrapper {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 0px 10px #888888;
  padding: 2rem;
  border-radius: 2rem;
}
.button {
  border: none;
  border-radius: 1rem;
  max-width: 200px;
  width: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0px 0px 10px #dbdbdb;
  transition: 0.4s;
  cursor: pointer;
  font-weight: bold;
}
.button:hover {
  background-color: rgb(175, 255, 172);
}
input {
  border: none;
  border-bottom: 1px solid rgb(202, 202, 202);
  width: 100%;
  padding: 8px;
}
</style>
