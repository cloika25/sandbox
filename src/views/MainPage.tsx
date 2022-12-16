import { Link } from "react-router-dom"

export const MainPage: React.FC = () => {
  return (
    <div>
      <div>Песочница одного фронтендера</div>
      <ul>
        <li>
          <Link to="/autocomplete">Тесты параметра autocomplete</Link>
          </li>
      </ul>
    </div>)
}