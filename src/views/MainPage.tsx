import { Link } from "react-router";
import { Routes } from "../routes";

export const MainPage = () => (
  <div className="flex flex-grow m-auto flex-col items-center">
    <div>Песочница одного фронтендера</div>
    <ul className="text-center">
      <li>
        <Link to={Routes.autocomplete}>Тесты параметра autocomplete</Link>
      </li>
      <li>
        <Link to={Routes.effector}>Магазин зверей на Effector</Link>
      </li>
      <li>
        <Link to={Routes.reduxToolkit}>Магазин зверей на Redux Toolkit</Link>
      </li>
      <li>
        <Link to={Routes.dialog}>
          Тег
          {"<Dialog />"}
        </Link>
      </li>
      <li>
        <Link to={Routes.shareApi}>WEB Share API</Link>
      </li>
    </ul>
  </div>
);
