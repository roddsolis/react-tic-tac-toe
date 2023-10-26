import { useState } from "react";


const Input = ({inputChange, display, idJugador}) => {



  return (
    <>
    <form action="">
    <input type="text" placeholder="Ingresa tu nombre" name="nombre" id={idJugador} defaultValue="" onChange={inputChange} style={{display:display}} autoComplete="off"/> 
    </form>
    </>
  )
}

export default Input
