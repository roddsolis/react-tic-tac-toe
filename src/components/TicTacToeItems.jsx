import Iconos from "/src/components/Iconos.jsx";
import { useState, useEffect } from "react";



const TicTacToeItems = ({valor, clickEnElCuadrado}) => {

  return (
    <>
       <button className="gameItem" onClick={clickEnElCuadrado}>{valor}</button>
    </>
  )
}

export default TicTacToeItems
