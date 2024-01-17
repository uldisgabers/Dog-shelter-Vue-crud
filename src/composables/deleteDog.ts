import { ref } from "vue";

const deleteDog = (id: number) => {
  const dog = ref(null);
  const errorMessage = ref(null);

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  fetch(`http://localhost:3000/dogs/${id}`, requestOptions)
    .then((response) => {
      response.json();
    })
    .then((data) => data)
    .catch((error) => {
      errorMessage.value = error;
      console.error("There was an error!", error);
    });

  return { dog, errorMessage };
};

export default deleteDog;
