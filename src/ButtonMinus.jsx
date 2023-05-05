export default function ButtonMinus({ setTest, test }) {
  function handleClick(e) {
    const input = e.target.nextSibling;
    setTest({ ...test, [input.name]: +input.value - 1 });
  }
  return (
    <button onClick={handleClick} className="inputButtons minus">
      -
    </button>
  );
}
