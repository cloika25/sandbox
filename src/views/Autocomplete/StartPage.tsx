import { Link } from "react-router-dom"

export const StartPage: React.FC = () => {
  return (
    <div>
      <span>
        {`Проверка разных комбинаций значений параметра "autocomplete" у тега <input />`}
      </span>
      <ul>
        <li>
          <Link to="/autocomplete/off">autocomplete="off"</Link>
        </li>
        <li>
          <Link to="/autocomplete/named">именованные autocomplete</Link>
        </li>
      </ul>
    </div>
  )
}