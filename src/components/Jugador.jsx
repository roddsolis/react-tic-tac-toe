import PropTypes from 'prop-types';
import Iconos from './Iconos';
import Input from './Input';


const Jugador = ({numeroDeJugador, nombreJugador, iconoDeJugador, conteoDePartidas, idNum}) => {

  console.log(conteoDePartidas)

  let jugadorClassName = "jugador"+ numeroDeJugador;
  
  return (
    <>
      <div className={jugadorClassName}>
        {console.log(jugadorClassName)}
          <div className="rowContainer">
            <Iconos iconoDeJugador={iconoDeJugador} />
            <p>{nombreJugador}</p>
          </div>
          <div className="rowContainer" style={conteoDePartidas === true ? {paddingBottom: "2em"} : {paddingBottom: "0"}}>
              {jugadorClassName === "jugador1" ? <Input idNum={1}/> : <Input idNum={2}/> } 
          </div>
          <div className="rowContainer" style={conteoDePartidas === true ? {display: "block" , paddingBottom: "0"} : {display: "none"}}>
            <div className="conteoDePartidasGanadas">
              <p>Partidas ganadas</p>
              <p>0</p>
            </div>
          </div>
        </div>
    </>
  )
}

Jugador.defaultProps = {
    nombreJugador: 'player 1', /* para que defaultProps muestre el valor por defecto, el valor por defecto tienes que ser el mismo que el nombre del prop  */
    iconoJugador: true
}

Jugador.propTypes = {
    nombre : PropTypes.string,
    icono: PropTypes.bool,
}

export default Jugador
