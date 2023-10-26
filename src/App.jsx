import Jugador from "/src/components/Jugador.jsx";
import Button from "/src/components/Button.jsx"
import TicTacToe from "/src/components/TicTacToe.jsx";
import { useState, useEffect } from "react";

const App = () => {

  const [mainContainer, setMainContainer] = useState(true);
 
 
  return(

    <>
      {/* este es el titulo del juego */}

      <div className="titleContainer"><h1>Tic Tac Toe</h1><h3>Whith</h3><h1>React</h1></div>

      <div className="mainContainer">

              <div className="contenido1" style={ mainContainer === true ?  {visibility: "visible"} : {display: "none"}}>
              <h6>Ingresa el nombre de ambos jugadores para comenzar.</h6>

                    <div className="gameContainer1">
                    <Jugador numeroDeJugador={1} nombreJugador="Jugador 1" iconoDeJugador={true} conteoDePartidas={false} />
                    <Jugador numeroDeJugador={2} nombreJugador="Jugador 2" iconoDeJugador={false} conteoDePartidas={false} />
                    </div>

                    <div className="actionsContainer" id="aContainer1" style={{display: "block"}}>
                    <Button textoDelBoton="Comenzar" tipoDeBoton="primary" onClick={()=>{setMainContainer(false)}} btnDisabled={false} />
                    </div>
                    
              </div>

              <div className="contenido2"  style={mainContainer === true ?  {display: "none"} : {visibility: "visible"}}>

                    <h6>Comienza</h6>
                    <div className="gameContainer2">
                    <Jugador numeroDeJugador={1} nombreJugador="Jugador 1" iconoDeJugador={true} conteoDePartidas={true} display='none'/>
                    <TicTacToe />
                    <Jugador numeroDeJugador={2} nombreJugador="Jugador 2" iconoDeJugador={false} conteoDePartidas={true} display='none'/>
                    </div>
                    <div className="actionsContainer" id="aContainer2">
                    <Button textoDelBoton="Volver al inicio" tipoDeBoton="secondary" onClick={()=>{setMainContainer(true)}}/>
                    <Button textoDelBoton="Iniciar partida" tipoDeBoton="primary" />
                    </div>
      
              </div>

      </div>
       
      <footer> <p className='smallText'>Design & code by : Rodd Solis</p><p className='underScore'>_</p></footer>

      </>

  )
  
  
};

export default App;

/* 
      <>
      <h6>{mensajesJuego.mensaje1}</h6>
        <div className="gameContainer2">
        <Jugador numeroDeJugador={1} nombreJugador="Jugador 1" iconoDeJugador={true} conteoDePartidas={true} display='none'/>
        <TicTacToe />
        <Jugador numeroDeJugador={2} nombreJugador="Jugador 2" iconoDeJugador={false} conteoDePartidas={true} display='none'/>
        </div>
        <div className="actionsContainer" id="aContainer2">
        <Button textoDelBoton="Volver al inicio" tipoDeBoton="secondary" />
        <Button textoDelBoton="Iniciar partida" tipoDeBoton="primary" />
        </div>
      </> */