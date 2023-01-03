import { useStore } from 'effector-react'
import React, { useState } from 'react'
import { $petGetByIdStatus, $petsUpdateStatus, clearErrorGetById, getPetByIdFx, update, updatePetBuId, updatePetFx } from './models/model'
import { PetItem, PetList } from './PetList';

const PetStore: React.FC = () => {
  const { loading: loadingList, error: errorList, data: dataList } = useStore($petsUpdateStatus);
  const {loading: loadingPet, error: errorPet, data: dataPet} = useStore($petGetByIdStatus);

  const [petId, setPetId] = useState(0)

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <span>{`В качестве api использовано `}</span>
        <a href="https://petstore3.swagger.io/#/" target="_blank">
          https://petstore3.swagger.io/#/
        </a>
      </div>
      <div>
        <h3>Получение списка животных</h3>
        {loadingList && (
          <div> loading... </div>
        )}
        {!loadingList && (
          <PetList pets={dataList} />
        )}
        {errorList && (
          <div>
            error: {errorList.message}
          </div>
        )}
        <div>
          <button 
            onClick={() => {
              updatePetFx();
            }}
            style={{
              marginTop: '1rem',
              marginRight: '1rem'
            }}
          >
            Получить список
          </button>
          <button onClick={() => {
            update([]);
          }}>
            Очистить список
          </button>
        </div>
      </div>
      <div>
        <h3>Получение животного по id</h3>
        <input 
          type="number" 
          style={{
            marginBottom: '1rem'
          }}
          onChange={(e) => {
            if(!Number.isNaN(+e.target.value)){
              setPetId(+e.target.value)
            }
          }}
        />
        {loadingPet && (
          <div>
            loading...
          </div>
        )}
        {(!loadingPet && dataPet) && (
          <div>
            <PetItem pet={dataPet} />
          </div>
        )}
        {errorPet && (
          <div>error: {errorPet.message}</div>
        )}
        <div>
          <button 
            onClick={() => {
              getPetByIdFx(petId);
            }}
            style={{
              marginTop: '1rem',
              marginRight: '1rem'
            }}
          >
            Получить животного
          </button>
          <button onClick={() => {
            clearErrorGetById();
            updatePetBuId(null);
          }}>
            Очистить животное
          </button>
        </div>
      </div>
    </div>
  )
}

export default PetStore