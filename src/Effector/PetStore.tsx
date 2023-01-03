import { useStore } from 'effector-react'
import React, { useEffect } from 'react'
import { $petsUpdateStatus, update,  updatePetFx } from './models/model'
import { PetList } from './PetList';

const PetStore: React.FC = () => {
  const {loading, error, data} = useStore($petsUpdateStatus);

  useEffect(() => {
    updatePetFx()
  }, [])

  return (
    <div>
      <div style={{marginBottom: '2rem'}}>
        <span>{`В качестве api использовано `}</span> 
        <a href="https://petstore3.swagger.io/#/" target="_blank">
          https://petstore3.swagger.io/#/
        </a>
      </div>
      <div>
        {loading && (
          <div> loading... </div>
        )}
        {!loading && (
          <PetList pets={data} />
        )}
        {error && (
          <div>
            error: {error.message}
          </div>
        )}
        <div style={{marginBottom: '1rem', marginTop: '1rem'}}>
          <button onClick={() => {
            updatePetFx();
          }}>
            Получить список
          </button>
        </div>
        <div>
          <button onClick={() => {
            update([]);
          }}>
            Очистить список
          </button>
        </div>
      </div>
    </div>
  )
}

export default PetStore