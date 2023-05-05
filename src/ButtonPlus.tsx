export default function ButtonPlus({ setTest, test }) {
  function handleClick(e) {
    const input = e.target.previousSibling;
    setTest({ ...test, [input.name]: +input.value + 1 });
  }
  return <button onClick={handleClick} className="inputButtons plus" >+</button>;
}
