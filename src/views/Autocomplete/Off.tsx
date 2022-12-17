export const Off: React.FC = () => {
  return (
    <form 
      className="col" 
      onSubmit={(value) => {console.log(value)}}
    >
      <label htmlFor="firstName">Имя</label>
      <input id="firstName" autoComplete="off" type="text" name="firstName"></input>
      <label htmlFor="lastName">Фамилия</label>
      <input id="lastName" autoComplete="off" type="text" name="lastName"></input>
      <label htmlFor="middleName">Отчество</label>
      <input id="middleName" autoComplete="off" type="text" name="middleName"></input>
      <label htmlFor="nickname">Никнейм</label>
      <input id="nickname" autoComplete="off" type="text" name="nickname"></input>
      <button type="submit">submit</button>
    </form>
  )
}