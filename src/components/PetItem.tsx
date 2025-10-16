import { Card, Text } from "@gravity-ui/uikit";
import { Pet, Statuses, StatusesKeys } from "../types/PetsStore";

type PetItemProps = {
  pet: Pet;
};

const convertPetStatus = (status: StatusesKeys) => {
  if (status === Statuses.available) {
    return "Доступно";
  }
  return status;
};

export const PetItem = ({ pet }: PetItemProps) => (
  <Card className="flex flex-col gap-2 border rounded-lg p-1">
    <Text className="flex justify-between">
      <span>Идентификатор питомца: </span>
      <div>{pet.id}</div>
    </Text>
    <Text className="flex justify-between">
      <span>Имя питомца: </span>
      <div>{pet.name}</div>
    </Text>
    <Text className="flex justify-between">
      <span>Категория: </span>
      <div>{pet.category?.name}</div>
    </Text>
    <Text className="flex justify-between">
      <span>Статус: </span>
      <div>{convertPetStatus(pet.status)}</div>
    </Text>
  </Card>
);
