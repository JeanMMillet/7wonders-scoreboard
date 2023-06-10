import { useRef } from "react";

export default function ButtonMinus({ setTest, index }) {
  const timer = useRef(null);
  const increment = (e) => {
    const input = e.target.nextSibling;
    console.log(input.name);
    if (
      (input.name === "militaryPoints" && input.value > -6) ||
      input.value > 0
    ) {
      setTest({ field: input.name, value: +input.value - 1 }, index);
      timer.current = setInterval(() => {
        if (
          (input.name === "militaryPoints" && input.value > -6) ||
          input.value > 0
        ) {
          setTest({ field: input.name, value: +input.value - 1 }, index);
        }
      }, 150);
    }
  };

  function timeoutClear() {
    clearInterval(timer.current);
  }

  return (
    <button
      onMouseDown={increment}
      onMouseUp={timeoutClear}
      className="inputButtons minus"
    >
      -
    </button>
  );
}
