import React from 'react';

export const SimpleLogin: React.FC = () => (
  <form
    // eslint-disable-next-line no-script-url
    action="javascript:console.log('submit')"
    className="col"
  >
    <label htmlFor="nickname">Никнейм</label>
    <input
      id="nickname"
      type="text"
    />
    <label htmlFor="new-password">Пароль</label>
    <input
      id="new-password"
      type="password"
    />
    <button type="submit">Submit</button>
  </form>
);
