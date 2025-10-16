import {
  combine,
  createEffect,
  createEvent,
  createStore
} from "effector"
import type { Pet } from "../../types/PetsStore";

export const $pets = createStore<Pet[]>([]);

/** Событие получения списка */
export const update = createEvent<Pet[]>();

/** Эффект для получения списка животных */
export const updatePetFx = createEffect<void, Pet[], Error>();
/** Ошибка получения списка животных */
export const $updateError = createStore<Error | null>(null);
/** Сброс ошибки списка */
export const clearErrorList = createEvent<void>();
$updateError
  .on(updatePetFx.fail, (_, { error }) => error)
  .reset(clearErrorList)
  .reset(updatePetFx.done);

/** Статус получения списка животных */
export const $petsUpdateStatus = combine({
  loading: updatePetFx.pending,
  error: $updateError,
  data: $pets,
});

export const $pet = createStore<Pet | null>(null);
/** Событие получения по id */
export const updatePetBuId = createEvent<Pet | null>();

/** Эффект для получения животного по id */
export const getPetByIdFx = createEffect<number, Pet, Error>();
/** Ошибка получеения по id */
export const $fetchByIdError = createStore<Error | null>(null);
/** Сброс ошибки */
export const clearErrorGetById = createEvent<void>();
$fetchByIdError
  .on(getPetByIdFx.fail, (_, { error }) => error)
  .reset(clearErrorGetById)
  .reset(getPetByIdFx.done);

/** Статус получения по id */
export const $petGetByIdStatus = combine({
  loading: getPetByIdFx.pending,
  error: $fetchByIdError,
  data: $pet,
});
