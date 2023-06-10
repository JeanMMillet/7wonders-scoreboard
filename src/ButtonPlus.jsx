import { useRef } from "react";

export default function ButtonPlus({ setTest, index }) {
  const timer = useRef(null);

  const increment = (e) => {
    const input = e.target.previousSibling;
    if (input.name === "militaryPoints" && input.value < 18) {
      setTest({ field: input.name, value: +input.value + 1 }, index);
      timer.current = setInterval(() => {
        if (input.name === "militaryPoints" && input.value < 18) {
          setTest({ field: input.name, value: +input.value + 1 }, index);
        }
      }, 150);
    } else {
      setTest({ field: input.name, value: +input.value + 1 }, index);
      timer.current = setInterval(
        () => setTest({ field: input.name, value: +input.value + 1 }, index),
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
