import React from "react";

export const Off: React.FC = () => (
  <form
    autoComplete="off"
    className="flex flex-col gap-2"
    onSubmit={(e) => e.preventDefault()}
  >
    <label htmlFor="firstName">Имя</label>
    <input className="border-2" id="firstName" name="name" type="text" />
    <label htmlFor="lastName">Фамилия</label>
    <input className="border-2" id="lastName" name="family-name" type="text" />
    <label htmlFor="middleName">Отчество</label>
    <input
      className="border-2"
      id="middleName"
      name="additional-name"
      type="text"
    />
    <label htmlFor="nickname">Никнейм</label>
    <input className="border-2" id="nickname" name="nickname" type="text" />
    <div className="flex gap-1">
      <button type="submit">жмяк</button>
      <button type="reset">сброс</button>
    </div>
  </form>
);
