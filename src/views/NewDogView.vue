<template>
  <div v-if="errorMessage">"There has been a problem making a new dog"</div>
  <NewDogForm @submitForm="handleSubmit" />
</template>

<script setup>
import { ref } from "vue";
import newDog from "../composables/newDog";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import NewDogForm from "../components/NewDogForm.vue";

const newDogToast = () => {
  toast.success("Dog added!", {
    autoClose: 1000,
  });
};

const { errorMessage } = newDog;

const handleSubmit = (newDogObj) => {
  newDog(newDogObj);
  newDogToast();
};
</script>

<style></style>
