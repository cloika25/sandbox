export const Off: React.FC = () => {
  return (
    <form className="col">
      <label htmlFor="field1">Field 1</label>
      <input id="field1" autoComplete="off" name="field1"></input>
      <label htmlFor="field2">Field 2</label>
      <input id="field2" autoComplete="off" name="field2"></input>
      <label htmlFor="field3">Field 3</label>
      <input id="field3" autoComplete="off" name="field3"></input>
      <label htmlFor="field4">Field 4</label>
      <input id="field4" autoComplete="off" name="field4"></input>
      <label htmlFor="field5">Field 5</label>
      <input id="field5" autoComplete="off" name="field5"></input>
      <label htmlFor="field6">Field 6</label>
      <input id="field6" autoComplete="off" name="field6"></input>
      <button type="submit">submit</button>
    </form>
  )
}