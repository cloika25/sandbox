import React from 'react';

export const Named = () => (
  <form
    // eslint-disable-next-line no-script-url
    action="javascript:console.log('submit')"
    className="col"
  >
    <label htmlFor="firstName">Имя</label>
    <input
      autoComplete="given-name"
      id="firstName"
      name="firstName"
      type="text"
    />
    <label htmlFor="lastName">Фамилия</label>
    <input
      autoComplete="family-name"
      id="lastName"
      name="lastName"
      type="text"
    />
    <label htmlFor="middleName">Отчество</label>
    <input
      autoComplete="additional-name"
      id="middleName"
      name="middleName"
      type="text"
    />
    <label htmlFor="nickname">Никнейм</label>
    <input
      autoComplete="nickname"
      id="nickname"
      name="nickname"
      type="text"
    />
    <button type="submit">submit</button>
  </form>
);
