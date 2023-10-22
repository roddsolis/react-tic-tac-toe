import { useState } from "react";


const Input = ({idNum, inputChange}) => {

  let idJugador1 = "jugador" + idNum;
  let idJugador2 = "jugador" + idNum;

  return (
    <>
    <form action="">
    <input type="text" placeholder="Ingresa tu nombre" name="nombre" id={idJugador1} defaultValue="" onChange={inputChange}/> 
    </form>
    </>
  )
}

export default Input
