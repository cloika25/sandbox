export const SimpleLogin: React.FC = () => (
  <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="nickname">Никнейм</label>
    <input
      autoComplete="username"
      className="border-2"
      id="nickname"
      type="text"
    />
    <label htmlFor="new-password">Пароль</label>
    <input
      autoComplete="current-password"
      className="border-2"
      id="new-password"
      type="password"
    />
    <div className="flex gap-2">
      <button type="submit">жмяк</button>
      <button type="reset">сброс</button>
    </div>
  </form>
);
