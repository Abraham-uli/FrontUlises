import React, { useState } from "react";

function Pruebaulises() {
const [datoescrito, setdatoescrito] = useState("")
const [datoenestado, setdatoenestado] = useState("")

  return (
    <div>
        <input onChange={(e) => {setdatoescrito(e.target.value)}} placeholder="escribe"/>
        <input value={datoenestado}/>
        <button onClick={() => {setdatoenestado(datoescrito)}}>enviar</button>
    </div>
  );
}
export default Pruebaulises;

