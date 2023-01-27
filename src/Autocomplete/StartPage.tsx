import { Link } from 'react-router-dom';
import React from 'react';

export const StartPage: React.FC = () => (
  <div>
    <span>
      {'Проверка разных комбинаций значений параметра "autocomplete" у тега <input />'}
    </span>
    <ul>
      <li>
        <Link to="/autocomplete/off">autocomplete=&quot;off&quot;</Link>
      </li>
      <li>
        <Link to="/autocomplete/named">именованные autocomplete</Link>
      </li>
      <li>
        <Link to="/autocomplete/simpleLogin">простая форма логина</Link>
      </li>
    </ul>
  </div>
);
