<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <h1>
        This will <span style="color: crimson">delete</span> the item! Are you
        sure?
      </h1>
      <p>You can't retrieve data later</p>
      <div class="btn-wrapper">
        <button class="btn-delete" @click="deleteItem">DELETE</button>
        <button class="btn-cancel" @click="closeModal">CANCEL</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["header"]);
const emit = defineEmits(["close", "delete"]);

const closeModal = () => {
  emit("close");
};

const deleteItem = () => {
  emit("delete");
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 1rem;
  margin: 100px auto;
  background: white;
  border-radius: 1rem;
}
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.btn-wrapper {
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
}
.btn-delete {
  background-color: rgb(255, 46, 88);
  padding: 1rem;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
.btn-cancel {
  background-color: rgb(210, 210, 255);
  padding: 1rem;
  color: rgb(88, 88, 88);
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
</style>
