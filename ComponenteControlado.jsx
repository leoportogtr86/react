import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("");

  function change(e) {
    setValor(e.target.value);
    console.log(valor);
  }

  return (
    <div>
      <input type="text" value={valor} onChange={change} />
      <h2 className = 'text-center text-danger'>{valor}</h2>
    </div>
  );
};
