import { IitemApiObjec } from "../types/i-components.js";

export const itemApiObjec: IitemApiObjec = {
  name: "",
  url: "",
};

export const getApiItem = async (apiUrlElement: string) => {
  const response = await fetch(`${apiUrlElement}`);
  const data = await response.json();

  itemApiObjec.name = data.name;
  itemApiObjec.url = data.sprites.other.home.front_default;

  return data;
};
