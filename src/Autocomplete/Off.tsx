import React from 'react';

export const Off: React.FC = () => (
  <form
    // eslint-disable-next-line no-script-url
    action="javascript:console.log('submit')"
    className="col"
  >
    <label htmlFor="firstName">Имя</label>
    <input
      autoComplete="off"
      id="firstName"
      name="firstName"
      type="text"
    />
    <label htmlFor="lastName">Фамилия</label>
    <input
      autoComplete="off"
      id="lastName"
      name="lastName"
      type="text"
    />
    <label htmlFor="middleName">Отчество</label>
    <input
      autoComplete="off"
      id="middleName"
      name="middleName"
      type="text"
    />
    <label htmlFor="nickname">Никнейм</label>
    <input
      autoComplete="off"
      id="nickname"
      name="nickname"
      type="text"
    />
    <button type="submit">submit</button>
  </form>
);
