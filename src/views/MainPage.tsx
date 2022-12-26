import { Link } from "react-router-dom"

export const MainPage: React.FC = () => {
  return (
    <div>
      <div>Песочница одного фронтендера</div>
      <ul>
        <li>
          <Link to="/autocomplete">Тесты параметра autocomplete</Link>
        </li>
        <li>
          <Link to="/effector">Изучение Effector</Link>
        </li>
      </ul>

      <span>каминг сун</span>
      <ul>
        <li>аналог твитера на JQuery</li>
      </ul>
    </div>)
}