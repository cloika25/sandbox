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

export const PetItem = ({ pet }: PetItemProps) => (
  <div className="flex flex-col gap-2 border rounded-lg p-1 min-w-[500px]">
    <div className="flex justify-between">
      <span>Идентификатор питомца: </span>
      <div>{pet.id}</div>
    </div>
    <div className="flex justify-between">
      <span>Имя питомца: </span>
      <div>{pet.name}</div>
    </div>
    <div className="flex justify-between">
      <span>Категория: </span>
      <div>{pet.category?.name}</div>
    </div>
    <div className="flex justify-between">
      <span>Статус: </span>
      <div>{convertPetStatus(pet.status)}</div>
    </div>
  </div>
);

export const PetList = ({ pets }: PetListProps) => {
  if (!pets?.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
};
