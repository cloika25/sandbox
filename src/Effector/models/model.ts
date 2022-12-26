import { combine, createEffect, createEvent, createStore, restore } from "effector";
import type { Pet } from '../types'

export const $pets = createStore<Pet[]>([]);

export const update = createEvent<Pet[]>();
export const getPetById = createEvent<Pet>();

export const getPetByIdFx = createEffect<number, Pet, Error>();
export const updatePetFx = createEffect<void, Pet[], Error>();

export const $fetchError = restore<Error>(getPetByIdFx.failData, null);

export const $usersGetStatus = combine({
  loading: getPetByIdFx.pending,
  error: $fetchError,
  data: $pets,
})