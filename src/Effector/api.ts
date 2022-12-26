import { createApi } from "../utils";
import { Pet, Statuses } from "./types";

const petsApi = createApi('https://petstore3.swagger.io/api/v3');

export const fetchByStatus = async () => {
  const response = await petsApi.get('/pet/findByStatus', { params: { status: Statuses.available } });
  return response.data
}

export const findById = async (petId: number): Promise<Pet> => {
  const response = await petsApi.get(`/pet/${petId}`);
  console.log(response)
  return response.data
}

export const updatePet = async (payload: Pet) => {
  await petsApi.put('/pet', payload)
}

