import { ref } from "vue";

type Dog = {
  name: string;
  age: number;
  breed: string;
  about: string;
  photo: string;
};

const newDog = (newDogObj: Dog) => {
  const dog = ref(null);
  const errorMessage = ref(null);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDogObj),
  };

  fetch("http://localhost:3000/dogs", requestOptions)
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

export default newDog;
