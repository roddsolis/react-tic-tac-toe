import PropTypes from 'prop-types';
import Iconos from './Iconos';
import Input from './Input';
import { useState, useEffect } from 'react'


const Jugador = ({numeroDeJugador, nombreJugador, iconoDeJugador, conteoDePartidas, idNum, display, }) => {

  const [userName, setUserName ] = useState(nombreJugador),
  
  jugadorClassName = "jugador"+ numeroDeJugador


  return (
    <>
      <div>
        hola
      </div>
    </>
  )
}

Jugador.defaultProps = {
    nombreJugador: 'player 1', /* para que defaultProps muestre el valor por defecto, el valor por defecto tiene que ser el mismo que el nombre del prop  */
    iconoJugador: true
}

Jugador.propTypes = {
    nombre : PropTypes.string,
    icono: PropTypes.bool,
}

export default Jugador




{/* <div className="rowContainer"> <Iconos iconoDeJugador={iconoDeJugador} /><p>{userName}</p> 
</div>


<div className="rowContainer" style={conteoDePartidas === true ? {paddingBottom: "2em", display: display} : {paddingBottom: "0"}}>
    {jugadorClassName === "jugador1" ? <Input display={display} idNum={1} inputChange={(e=>{setUserName(e.target.value)})}/> : <Input display={display} idNum={2} inputChange={(e=>{setUserName(e.target.value)})}/> } 
</div>


<div className="rowContainer" style={conteoDePartidas === true ? {display: "block" , paddingBottom: "0"} : {display: "none"}}>
  <div className="conteoDePartidasGanadas"><p>Partidas ganadas</p><p>0</p></div>
</div> */}
