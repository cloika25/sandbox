import { Link } from "react-router";
import { Routes } from "../routes";

export const MainPage = () => (
  <div>
    <div>Песочница одного фронтендера</div>
    <ul>
      <li>
        <Link to={Routes.autocomplete}>Тесты параметра autocomplete</Link>
      </li>
      <li>
        <Link to={Routes.effector}>Изучение Effector</Link>
      </li>
      <li>
        <Link to={Routes.dialog}>
          Тег
          {"<Dialog />"}
        </Link>
      </li>
      <li>
        <Link to={Routes.reduxToolkit}>Redux Toolkit</Link>
      </li>
      <li>
        <Link to={Routes.shareApi}>WEB Share API</Link>
      </li>
    </ul>
  </div>
);
