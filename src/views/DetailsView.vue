<template>
  <ModalDelete v-if="showModal" @close="toggleModal" @delete="handleDelete" />
  <div v-if="error">{{ error }}</div>
  <div v-if="!dog">Loading...</div>
  <div v-else-if="!editMode">
    <div class="dog">
      <div class="img-wrapper">
        <img :src="dog.photo" alt="" class="photo" />
      </div>
      <div class="info-wrapper">
        <h3 class="dog-name">Name: {{ dog.name }}</h3>
        <p><b>Breed:</b> {{ dog.breed }}</p>
        <p><b>Age:</b> {{ dog.age }}</p>
        <p><b>About:</b> {{ dog.about }}</p>
      </div>
    </div>

    <div class="btn-wrapper">
      <button class="btn-delete" @click="toggleModal">DELETE</button>
      <button class="btn-edit" @click="handleEdit">EDIT</button>
    </div>
  </div>
  <div class="form-wrapper" v-else>
    <form @submit.prevent="handleSave" class="edit-form">
      <label>Dogs name:</label>
      <input type="text" v-model="dog.name" />

      <label>Dogs age:</label>
      <input type="number" v-model="dog.age" />

      <label>Dogs breed:</label>
      <input type="text" v-model="dog.breed" />

      <label>About the dog:</label>
      <input type="text" v-model="dog.about" />

      <label>Dogs photo URL:</label>
      <input type="text" v-model="dog.photo" />

      <div class="btn-wrapper">
        <button class="btn-save">SAVE</button>
        <button class="btn-edit" @click="editMode = false">CANCEL</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import getDog from "../composables/getDog";
import deleteDog from "../composables/deleteDog";
import editDog from "../composables/editDog";
import router from "@/router";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import ModalDelete from "../components/ModalDelete.vue";

const props = defineProps(["id"]);

// TOASTS

const updateToast = () => {
  toast.success("Dog info updated!", {
    autoClose: 1000,
  });
};

const deleteToast = () => {
  toast.success("Dog deleted!", {
    autoClose: 1000,
  });
};

// GET DOG
const { dog, error, load } = getDog(props.id);

load();

// DELETE DOG
let showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const handleDelete = () => {
  deleteDog(props.id);
  deleteToast();
  router.push("/");
};

// EDIT DOG

let editMode = ref(false);

const handleEdit = () => {
  editMode.value = true;
};

const handleSave = () => {
  editDog(
    props.id,
    dog.value.name,
    dog.value.age,
    dog.value.breed,
    dog.value.about,
    dog.value.photo
  );
  updateToast();
  editMode.value = false;
};
</script>

<style scoped>
.dog {
  display: flex;
}
.photo {
  max-width: 600px;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
}
.edit-form {
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
.img-wrapper {
}
.info-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
.dog-name {
  font-size: 24px;
}
.btn-wrapper {
  margin: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
}
.btn-delete {
  background-color: crimson;
  padding: 1rem;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
.btn-edit {
  background-color: rgb(106, 106, 253);
  padding: 1rem;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
.btn-save {
  background-color: rgb(122, 255, 162);
  padding: 1rem;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
.btn-cancel {
  background-color: rgb(255, 105, 105);
  padding: 1rem;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
</style>
