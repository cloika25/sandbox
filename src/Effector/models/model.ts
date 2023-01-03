import { combine, createEffect, createEvent, createStore } from "effector";
import type { Pet } from '../types'

export const $pets = createStore<Pet[]>([]);

/** События со стором */
export const update = createEvent<Pet[]>();
export const getPetById = createEvent<Pet>();

/** Эффект для получения животного по id */
export const getPetByIdFx = createEffect<number, Pet, Error>();
/** Ошибка получеения по id */
export const $fetchByIdError = createStore<Error | null>(null);
$fetchByIdError
  .on(getPetByIdFx.fail, (_, { error }) => error)
  .reset(getPetByIdFx.done)
/** Статус получения по id */
export const $petGetByIdStatus = combine({
  loading: getPetByIdFx.pending,
  error: $fetchByIdError,
  data: $pets,
})

/** Эффект для получения списка животных */
export const updatePetFx = createEffect<void, Pet[], Error>();
/** Ошибка получения списка животных */
export const $updateError = createStore<Error | null>(null);
$updateError
  .on(updatePetFx.fail, (_, { error }) => error)
  .reset(updatePetFx.done)
/** Статус получения списка животных */
export const $petsUpdateStatus = combine({
  loading: updatePetFx.pending,
  error: $updateError,
  data: $pets,
})