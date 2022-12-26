import { fetchByStatus, findById } from "../api";
import { Pet } from "../types";
import { $pets, getPetByIdFx, update, updatePetFx, getPetById } from "./model";

updatePetFx.use(fetchByStatus);
getPetByIdFx.use(findById);


const updatePetStore = (state: Pet[], data: Pet[]) => {
  return [...state, ...data]
}

const getPetByIdHandler = (state: Pet[], data: Pet) => {
  console.log(state)
  return [data]
}

$pets
  .on(update, updatePetStore)
  .on(updatePetFx.doneData, (_, data) => data)

$pets
  .on(getPetById, getPetByIdHandler)
  .on(getPetByIdFx.doneData, (_, data) => {
    console.log(_);
    return [data]
  })
