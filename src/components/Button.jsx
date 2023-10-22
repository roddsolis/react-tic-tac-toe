import PropTypes from 'prop-types';

const Button = ({textoDelBoton}) => {

  return (
    <>
      <div className="actionsContainer">
      <button className="btn-primary">{textoDelBoton}</button> {/* para activar el boton hay que eliminar la clase btn-disabled para inabilitar agregar nuevamente la clase*/}
      </div>
    </>
  )
}


Button.defaultProps = {
  textoDelBoton: "Soy un boton",
}

Button.propTypes = {
 textoBoton: PropTypes.string
}

export default Button
