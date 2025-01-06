import { useUnit } from "effector-react";
import { useState } from "react";
import {
  $petGetByIdStatus,
  $petsUpdateStatus,
  clearErrorGetById,
  getPetByIdFx,
  update,
  updatePetBuId,
  updatePetFx,
} from "./models/model";
import { PetItem, PetList } from "./PetList";

const PetStore = () => {
  const {
    loading: loadingList,
    error: errorList,
    data: dataList,
  } = useUnit($petsUpdateStatus);

  const {
    loading: loadingPet,
    error: errorPet,
    data: dataPet,
  } = useUnit($petGetByIdStatus);

  const [petId, setPetId] = useState(0);

  return (
    <div className="flex flex-col gap-8 items-center">
      <span>
        {`В качестве api использовано `}
        <a
          href="https://petstore3.swagger.io/#/"
          rel="noreferrer"
          target="_blank"
        >
          https://petstore3.swagger.io/#/
        </a>
      </span>
      <h3>Получение списка животных</h3>
      {loadingList && <div> loading... </div>}
      {!loadingList && <PetList pets={dataList} />}
      {errorList && <div>{`error: ${errorList.message}`}</div>}
      <div className="flex gap-2">
        <button
          onClick={() => {
            updatePetFx();
          }}
          type="button"
        >
          Получить список
        </button>
        <button
          onClick={() => {
            update([]);
          }}
          type="button"
        >
          Очистить список
        </button>
      </div>
      <h3>Получение животного по id</h3>
      {loadingPet && <div>loading...</div>}
      {!loadingPet && dataPet && (
        <div>
          <PetItem pet={dataPet} />
        </div>
      )}
      {errorPet && (
        <div>
          error:
          {errorPet.message}
        </div>
      )}
      <div className="flex flex-col gap-2 items-center">
        <input
          className="border-2 w-min"
          onChange={(e) => {
            if (!Number.isNaN(+e.target.value)) {
              setPetId(+e.target.value);
            }
          }}
          type="number"
        />
        <div className="flex gap-2">
          <button
            onClick={() => {
              getPetByIdFx(petId);
            }}
            type="button"
          >
            Получить животного
          </button>
          <button
            onClick={() => {
              clearErrorGetById();
              updatePetBuId(null);
            }}
            type="button"
          >
            Очистить животное
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetStore;
