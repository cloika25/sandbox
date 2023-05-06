import { Link } from 'react-router-dom';
import React from 'react';

export const MainPage: React.FC = () => (
  <div>
    <div>Песочница одного фронтендера</div>
    <ul>
      <li>
        <Link to="/autocomplete">Тесты параметра autocomplete</Link>
      </li>
      <li>
        <Link to="/effector">Изучение Effector</Link>
      </li>
      <li>
        <Link to="/dialog">
          Тег
          {'<Dialog />'}
        </Link>
      </li>
      <li>
        <Link to="/reduxToolkit">Redux Toolkit</Link>
      </li>
      <li>
        <Link to="/shareApi">WEB Share API</Link>
      </li>
    </ul>

    <span>каминг сун</span>
    <ul>
      <li title="но это не точно">аналог твитера на JQuery</li>
      <li>залезть в Redux по самые помидоры</li>
      <li>css modules</li>
    </ul>
  </div>
);
