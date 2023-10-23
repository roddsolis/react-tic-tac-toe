import PropTypes from 'prop-types';

const Button = ({textoDelBoton, tipoDeBoton, onClick}) => {

  let setBtnClass = "btn-" + tipoDeBoton


  return (
    <>
      <button className={setBtnClass} onClick={onClick} >{textoDelBoton}</button> {/* para activar el boton hay que eliminar la clase btn-disabled para inabilitar agregar nuevamente la clase*/}
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
