import { useRef } from "react";

export default function ButtonMinus({ setTest, test }) {
  const timer = useRef(null);
  const increment = (e) => {
    const input = e.target.nextSibling;
    if (
      (input.name === "militaryPoints" && input.value > -6) ||
      input.value > 0
    ) {
      setTest({ ...test, [input.name]: +input.value - 1 });
      timer.current = setInterval(() => {
        if (
          (input.name === "militaryPoints" && input.value > -6) ||
          input.value > 0
        ) {
          setTest({ ...test, [input.name]: +input.value - 1 });
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
