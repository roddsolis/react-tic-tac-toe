import PropTypes from 'prop-types';
import Iconos from './Iconos';
import Input from './Input';


const Jugador = ({player, nombreJugador, iconoDeJugador}) => {


  let jugadorClassName = "jugador"+ player;

  return (
    <>
      <div className={jugadorClassName}>
          <div className="rowContainer">
            <Iconos iconoDeJugador={iconoDeJugador} />
            <p>{nombreJugador}</p>
          </div>
          <div className="rowContainer">
          <Input />
          </div>
          <div className="rowContainer">
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
