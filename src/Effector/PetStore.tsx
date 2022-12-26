import { useStore } from 'effector-react'
import React, { useEffect } from 'react'
import { $usersGetStatus,  update,  updatePetFx } from './models/model'

const PetStore: React.FC = () => {
  const {loading, error, data} = useStore($usersGetStatus);

  useEffect(() => {
    updatePetFx()
  }, [])

  return (
    <div>
      <div>
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
          JSON.stringify(data)
        )}
        <div>{JSON.stringify(error)}</div>

        <div>
          <button onClick={() => {
            update([])
          }}>
            Очистить список
          </button>
        </div>
      </div>
    </div>
  )
}

export default PetStore