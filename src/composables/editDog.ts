import { ref } from "vue";

const editDog = (
  id: number,
  name: string,
  age: number,
  breed: string,
  about: string,
  photo: string
) => {
  const dog = ref(null);
  const errorMessage = ref(null);

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      age: age,
      breed: breed,
      about: about,
      photo: photo,
    }),
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

export default editDog;
