import { Pet } from "../types/PetsStore";
import { PetItem } from "./PetItem";

type PetListProps = {
  pets: Pet[];
};

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
