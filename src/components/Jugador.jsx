import PropTypes from 'prop-types';
import Iconos from './Iconos.jsx';

const Jugador = ({nombreJugador, iconoDeJugador}) => {
  return (
    <>
      <div className="jugador1">
          <div className="rowContainer">
            <Iconos iconoDeJugador={iconoDeJugador} />
            <p>{nombreJugador}</p>
          </div>
          <div className="rowContainer">
            <input type="text" placeholder="ingresar nombre"name="nombre" id="nombre" defaultValue=""/>
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
