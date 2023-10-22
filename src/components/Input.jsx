
const Input = ({idNum}) => {

  let idJugador1 = "jugador" + idNum;
  let idJugador2 = "jugador" + idNum;


  return (
    <>
    <input type="text" placeholder="Ingresa tu nombre" name="nombre" id={idJugador1} defaultValue=""/>
    </>
  )
}

export default Input
