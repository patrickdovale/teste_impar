import axios from "axios";

const GetSearch = async (search) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${search}`
    );

    return response;
  } catch (error) {
    return error;
  }
};

export default GetSearch;
