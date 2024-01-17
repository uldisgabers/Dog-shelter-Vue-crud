import { ref } from "vue";

const getDogs = () => {
  const dogs = ref([]);
  const error = ref<null | string>(null);

  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/dogs");
      if (!data.ok) {
        throw Error("No data available");
      }
      dogs.value = await data.json();
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
        console.log(error.value);
      } else {
        console.error("Unexpected error type");
      }
    }
  };

  return { dogs, error, load };
};

export default getDogs;
