import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { PetList } from "../Effector/PetList";
import { deleteHandle, initMockData } from "./petsSlice";

const ReduxToolkitExample: React.FC = () => {
  const pets = useSelector((state: RootState) => state.petsSlice.pets);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3>Получение списка животных</h3>
      <PetList pets={pets} />
      <div className="flex gap-2">
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
  );
};

export default ReduxToolkitExample;
