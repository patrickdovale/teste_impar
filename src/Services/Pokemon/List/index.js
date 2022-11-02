import axios from "axios";

let size = 0;
let i = 1;
let result = [];

const GetListPokemon = async (offset, sizeActual = 0) => {
  try {
    let urls = [];
    size = result.length + offset;

    if (size > sizeActual && sizeActual) {
      while (i < size) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        i++;
      }
      const response = await axios
        .all(urls.map((url) => axios.get(url)))
        .then((res) => res);
      result = result.concat(response.map((res) => res?.data));
      return result;
    } else {
      while (i < size) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        i++;
      }
      const response = await axios
        .all(urls.map((url) => axios.get(url)))
        .then((res) => res);
      result = response.map((res) => res?.data);
      return result;
    }
  } catch (error) {
    return error;
  }
};

export default GetListPokemon;
