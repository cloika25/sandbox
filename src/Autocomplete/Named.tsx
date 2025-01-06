export const Named = () => (
  <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="firstName">Имя</label>
    <input
      autoComplete="given-name"
      className="border-2"
      id="firstName"
      name="firstName"
      type="text"
    />
    <label htmlFor="lastName">Фамилия</label>
    <input
      autoComplete="family-name"
      className="border-2"
      id="lastName"
      name="lastName"
      type="text"
    />
    <label htmlFor="middleName">Отчество</label>
    <input
      autoComplete="additional-name"
      className="border-2"
      id="middleName"
      name="middleName"
      type="text"
    />
    <label htmlFor="nickname">Никнейм</label>
    <input
      autoComplete="nickname"
      className="border-2"
      id="nickname"
      name="nickname"
      type="text"
    />
    <div className="flex gap-2">
      <button type="submit">жмяк</button>
      <button type="reset">сбросить</button>
    </div>
  </form>
);
