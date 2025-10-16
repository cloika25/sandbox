import { Button } from "@gravity-ui/uikit";
import { fetchByStatus } from "../../../api";
import { useActionState } from "react";
import { PetList } from "../../../components/PetList";

export const PetStore = () => {
  const [state, formAction, isPending] = useActionState(fetchByStatus, []);

  return (
    <div className="flex flex-col gap-8 items-center text-center">
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
      <div className="flex gap-2">
        <Button loading={isPending} onClick={formAction} size="m" view="action">
          Получить список
        </Button>
      </div>
      <div className="max-w-screen-md">
        <PetList pets={state} />
      </div>
    </div>
  );
};
