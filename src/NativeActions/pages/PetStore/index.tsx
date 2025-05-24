import { Button } from "@gravity-ui/uikit";

export const PetStore = () => {
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
        <Button size="m" view="action">
          Получить список
        </Button>
      </div>
    </div>
  );
};
