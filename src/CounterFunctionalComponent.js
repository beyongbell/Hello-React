import React from "react";

export default function CounterFunctionalComponent() {
  // React Hook
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1> Counter Functional Component </h1>
      <h3> Counter : {count}</h3>
      <button onClick={() => setCount(count + 1)}>{" ADD "}</button>
    </div>
  );
}
