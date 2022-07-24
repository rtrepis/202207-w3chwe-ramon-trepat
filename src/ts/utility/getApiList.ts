const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getApiList = async () => {
  const response = await fetch(`${apiUrl}`);
  const data = await response.json();

  return data;
};

export default getApiList;
