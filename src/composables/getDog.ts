import { ref } from "vue";

const getDog = (id: number) => {
  const dog = ref(null);
  const error = ref<null | string>(null);

  const load = async () => {
    try {
      const data = await fetch(`http://localhost:3000/dogs/${id}`);
      if (!data.ok) {
        throw Error("That dog does not exist");
      }
      dog.value = await data.json();
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
        console.log(error.value);
      } else {
        console.error("Unexpected error type");
      }
    }
  };

  return { dog, error, load };
};

export default getDog;
