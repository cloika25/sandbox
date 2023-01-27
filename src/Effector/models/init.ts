import { fetchByStatus, findById } from '../../api';
import { Pet } from '../types';
import {
  $pets,
  getPetByIdFx,
  update,
  updatePetFx,
  updatePetBuId,
  $pet,
} from './model';

updatePetFx.use(fetchByStatus);

const updatePetStore = (state: Pet[], data: Pet[]) => data;

$pets
  .on(update, updatePetStore)
  .on(updatePetFx.doneData, (_, data) => data);

getPetByIdFx.use(findById);

const updatePetBuIdHandler = (state: Pet | null, data: Pet | null) => data;

$pet
  .on(updatePetBuId, updatePetBuIdHandler)
  .on(getPetByIdFx.doneData, (_, data) => data);
