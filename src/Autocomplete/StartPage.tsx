import { Link } from "react-router";
import { Routes } from "../routes";

export const StartPage = () => (
  <div className={"flex flex-col gap-2"}>
    <span className={"flex flex-col gap-2 items-center"}>
      Проверка разных комбинаций значений параметра "autocomplete" у тега input
      <input className={"border-2 w-max"} />
    </span>
    <ul>
      <li>
        <Link to={Routes.autocomplete + "/off"}>
          autocomplete=&quot;off&quot;
        </Link>
      </li>
      <li>
        <Link to={Routes.autocomplete + "/named"}>
          именованные autocomplete
        </Link>
      </li>
      <li>
        <Link to={Routes.autocomplete + "/simpleLogin"}>
          простая форма логина
        </Link>
      </li>
    </ul>
  </div>
);
