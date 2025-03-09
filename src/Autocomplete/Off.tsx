import React from "react";

export const Off: React.FC = () => (
  <div className="flex gap-3 flex-wrap">
    <div className="p-1 border-2 rounded">
      <span>Форма где атрибут autocomplete="off" стоит на форме</span>
      <form
        autoComplete="off"
        className="flex flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="firstName">Имя</label>
        <input className="border-2" id="firstName" name="name" type="text" />
        <label htmlFor="lastName">Фамилия</label>
        <input
          className="border-2"
          id="lastName"
          name="family-name"
          type="text"
        />
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
    </div>
    <div className="p-1 border-2 rounded">
      <span>Форма где атрибут autocomplete="off" стоит на каждом поле</span>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="firstName">Имя</label>
        <input
          autoComplete="off"
          className="border-2"
          id="firstName"
          name="name"
          type="text"
        />
        <label htmlFor="lastName">Фамилия</label>
        <input
          autoComplete="off"
          className="border-2"
          id="lastName"
          name="family-name"
          type="text"
        />
        <label htmlFor="middleName">Отчество</label>
        <input
          autoComplete="off"
          className="border-2"
          id="middleName"
          name="additional-name"
          type="text"
        />
        <label htmlFor="nickname">Никнейм</label>
        <input
          autoComplete="off"
          className="border-2"
          id="nickname"
          name="nickname"
          type="text"
        />
        <div className="flex gap-1">
          <button type="submit">жмяк</button>
          <button type="reset">сброс</button>
        </div>
      </form>
    </div>
  </div>
);
