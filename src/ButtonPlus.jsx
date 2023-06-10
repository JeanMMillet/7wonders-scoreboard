import { useRef } from "react";

export default function ButtonPlus({ setTest, test }) {
  const timer = useRef(null);

  const increment = (e) => {
    const input = e.target.previousSibling;
    if (input.name === "militaryPoints" && input.value < 18) {
      setTest({ ...test, [input.name]: +input.value + 1 });
      timer.current = setInterval(() => {
        if (input.name === "militaryPoints" && input.value < 18) {
          setTest({ ...test, [input.name]: +input.value + 1 });
        }
      }, 150);
    } else {
      setTest({ ...test, [input.name]: +input.value + 1 });
      timer.current = setInterval(
        () => setTest({ ...test, [input.name]: +input.value + 1 }),
        150
      );
    }
  };

  function timeoutClear() {
    clearInterval(timer.current);
  }
  return (
    <button
      onMouseDown={increment}
      onMouseUp={timeoutClear}
      className="inputButtons plus"
    >
      +
    </button>
  );
}
