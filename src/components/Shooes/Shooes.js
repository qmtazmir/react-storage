import React from "react";
import { add, multiply } from "../../Utilites/calculate";

const Shooes = () => {
  const first = 20;
  const second = 11;
  const result = multiply(first, second);
  const sum = add(first, second);

  return (
    <div>
      <h3>This is shooes Compe</h3>
      <h4>
        Total : {result} andt total : {result + sum}
      </h4>
    </div>
  );
};

export default Shooes;
