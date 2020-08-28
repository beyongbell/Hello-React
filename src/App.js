import React, { useState } from "react";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionalComponent";

// let   เปลี่ยนค่าได้
// const เปลี่ยนค่าไม่ได้

function App() {
  let var1 = 0;
  const var2 = "Test";
  const var3 = true;
  const var4 = false;
  const [count, setCount] = useState(0);

  return (
    <div>
      JSX
      <h1> React Tutorial </h1>
      <h1> {var1} </h1>
      <h1> {var2} </h1>
      <h1> {var3 && "Yes"} </h1>
      {var4 ? <h1> YES </h1> : <h1> No </h1>}
      <h1> Count : {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <CounterClassComponent />
      <CounterFunctionalComponent />
    </div>
  );
}

export default App;
