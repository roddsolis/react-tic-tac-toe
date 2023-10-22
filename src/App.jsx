import Jugador from "/src/components/Jugador.jsx";
import Button from "/src/components/Button.jsx"

const App = () => {

  let guionAnimado = document.querySelector('.underScore')

  // console.log(opacidadGuion)
  
/*   setInterval(() => {
      opacidadGuion === "100%" ? guionAnimado.style.opacity = "100%" : guionAnimado.style.opacity = "0%"
  }, 1000); */


  return (
    <>
      {/* este es el titulo del juego */}
      <div className="titleContainer">
        <h1>Tic Tac Toe</h1>
        <h3>Whith</h3>
        <h1>React</h1>
      </div>
      
      <div className="mainContainer">
        <h6>Ingresa el nombre de ambos jugadores para comenzar.</h6>
        <Jugador numeroDeJugador={1} nombreJugador="Jugador 1" iconoDeJugador={true} conteoDePartidas={false}/>
        <Jugador numeroDeJugador={2} nombreJugador="Jugador 2" iconoDeJugador={false} conteoDePartidas={false}/>
        <Button textoDelBoton="Comenzar" tipoDeBotton="Primario"/>
      </div>

      <footer> <p className='smallText'>Design & code by : Rodd Solis</p><p className='underScore'>_</p></footer>
  
    </>
  );
};

export default App;
