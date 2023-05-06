import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { PetItem } from '../Effector/PetList';
import { deleteHandle, initMockData } from './petsSlice';

const ReduxToolkitExample: React.FC = () => {
  const pets = useSelector((state: RootState) => state.petsSlice.pets);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h3 className="mb-[1rem]">Получение списка животных</h3>
        {pets.map((pet) => (
          <PetItem
            key={pet.id}
            pet={pet}
          />
        ))}
        <div>
          <button
            onClick={() => {
              dispatch(initMockData());
            }}
            type="button"
          >
            Получить список
          </button>
          <button
            onClick={() => {
              dispatch(deleteHandle(3));
            }}
            type="button"
          >
            Очистить список
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReduxToolkitExample;
