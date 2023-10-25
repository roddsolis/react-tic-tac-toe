import PropTypes from 'prop-types';

const Button = ({textoDelBoton, tipoDeBoton, onClick, btnDisabled}) => {

  let setBtnClass = "btn-" + tipoDeBoton

  
  // let disabled = desactivarBoton === true && 'disabled'

  
  

  return (
    <>
      <button type="text" disabled={btnDisabled} className={setBtnClass} onClick={onClick}  >{textoDelBoton}</button> {/* para activar el boton hay que eliminar la clase btn-disabled para inabilitar agregar nuevamente la clase*/}
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
