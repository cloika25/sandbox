export const Named = () => {
  return (
    <form className="col">
      <label htmlFor="firstName">Имя</label>
      <input id="firstName" autoComplete="given-name" type="text" name="firstName"></input>
      <label htmlFor="lastName">Фамилия</label>
      <input id="lastName" autoComplete="family-name" type="text" name="lastName"></input>
      <label htmlFor="middleName">Отчество</label>
      <input id="middleName" autoComplete="additional-name" type="text" name="middleName"></input>
      <label htmlFor="nickname">Никнейм</label>
      <input id="nickname" autoComplete="nickname" type="text" name="nickname"></input>
      <button type="submit">submit</button>
    </form>
  )
} 