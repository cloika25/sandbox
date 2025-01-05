import React from "react";
import { Pet, Statuses, StatusesKeys } from "./types";

export interface PetListProps {
  pets: Pet[];
}

export interface PetItemProps {
  pet: Pet;
}

const convertPetStatus = (status: StatusesKeys) => {
  if (status === Statuses.available) {
    return "Доступно";
  }
  return status;
};

export const PetItem: React.FC<PetItemProps> = ({ pet }) => (
  <div style={{ textAlign: "left", marginBottom: "1rem" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Идентификатор питомца: </span>
      <div>{pet.id}</div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Имя питомца: </span>
      <div>{pet.name}</div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Категория: </span>
      <div>{pet.category.name}</div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Статус: </span>
      <div>{convertPetStatus(pet.status)}</div>
    </div>
  </div>
);

export const PetList: React.FC<PetListProps> = ({ pets }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    {pets.map((pet) => (
      <PetItem key={pet.id} pet={pet} />
    ))}
  </div>
);
