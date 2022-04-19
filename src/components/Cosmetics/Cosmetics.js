import React from "react";
import { add } from "../../Utilites/calculate";
// import add from "../../Utilites/calculate";

const Cosmetics = () => {
  const first = 55;
  const second = 70;
  const total = add(first, second);
  return (
    <div>
      <h1>This is cosmetics</h1>
      <p>Total: {total}</p>
    </div>
  );
};

export default Cosmetics;
