export const getApiList = async (apiUrl: string) => {
  const response = await fetch(`${apiUrl}`);
  const data = await response.json();

  return data;
};

export default getApiList;
