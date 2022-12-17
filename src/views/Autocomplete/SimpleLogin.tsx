export const SimpleLogin: React.FC = () => {
  return (
    <form className="col" action="javascript:console.log('submit')">
      <label htmlFor="nickname">Никнейм</label>
      <input id="nickname" type="text"/>
      <label htmlFor="new-password">Пароль</label>
      <input id="new-password" type="password"/>
      <button type="submit">Submit</button>
    </form>
  )
}