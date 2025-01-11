import { Link } from "react-router";
import { AutocompleteRoutes } from "./router";

export const StartPage = () => (
  <div className="flex flex-col gap-2 items-center text-center">
    <span className={"flex flex-col gap-2 items-center"}>
      Проверка разных комбинаций значений параметра "autocomplete" у тега input
      <input className={"border-2 w-max"} />
    </span>
    <ul>
      <li>
        <Link to={AutocompleteRoutes.off}>autocomplete=&quot;off&quot;</Link>
      </li>
      <li>
        <Link to={AutocompleteRoutes.named}>именованные autocomplete</Link>
      </li>
      <li>
        <Link to={AutocompleteRoutes.simpleLogin}>простая форма логина</Link>
      </li>
    </ul>
  </div>
);
