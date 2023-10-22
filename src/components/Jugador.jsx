import PropTypes from 'prop-types';
import Iconos from './Iconos';
import Input from './Input';


const Jugador = ({numeroDeJugador, nombreJugador, iconoDeJugador, conteoDePartidas}) => {

  console.log(conteoDePartidas)

  let jugadorClassName = "jugador"+ numeroDeJugador;
  
  return (
    <>
      <div className={jugadorClassName}>
          <div className="rowContainer">
            <Iconos iconoDeJugador={iconoDeJugador} />
            <p>{nombreJugador}</p>
          </div>
          <div className="rowContainer" style={conteoDePartidas === true ? {paddingBottom: "2em"} : {paddingBottom: "0"}}>
          <Input />
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
