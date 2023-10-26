// import Jugador from "./components/Jugador.jsx";
import Button from "./components/Button.jsx"
import TicTacToe from "./components/TicTacToe.jsx";
import Iconos from './components/Iconos'
import Input from './components/Input'
import { useState, useEffect } from "react";

const App = () => {

  const [mainContainer, setMainContainer] = useState(true);
  const [ userName1 , setUserName1] = useState('Jugador1')
  const [ userName2 , setUserName2] = useState('Jugador2')
 
 
  return(

    <>
      {/* este es el titulo del juego */}

      <div className="titleContainer"><h1>Tic Tac Toe</h1><h3>Whith</h3><h1>React</h1></div>

      <div className="mainContainer">

              <div className="contenido1" style={ mainContainer === true ?  {visibility: "visible"} : {display: "none"}}>

                    <h6>Ingresa el nombre de ambos jugadores para comenzar.</h6>

                    <div className="gameContainer1">

                          <div className='jugador1'>
                          
                            <div className="rowContainer"> 
                            <Iconos iconoDeJugador={true}/>
                            <p>{userName1}</p> 
                            </div>

                            <div className="rowContainer" style={{paddingBottom: "0", display: 'block'}}>
                            <Input idJugador='jugador1' display='block' inputChange={(e=>{setUserName1(e.target.value)})}/>  
                            </div>

                            <div className="rowContainer" style={{display: "none" , paddingBottom: "0"}}>
                            <div className="conteoDePartidasGanadas"><p>Partidas ganadas</p><p>0</p></div>
                            </div> 

                          </div>

                          <div className='jugador2'>
                          
                            <div className="rowContainer"> 
                            <Iconos iconoDeJugador={false}/>
                            <p>{userName2}</p> 
                            </div>

                            <div className="rowContainer" style={{paddingBottom: "0", display: 'block'}}>
                            <Input idJugador='jugador2' display='block' inputChange={(e=>{setUserName2(e.target.value)})}/>  
                            </div>

                            <div className="rowContainer" style={{display: "none" , paddingBottom: "0"}}>
                            <div className="conteoDePartidasGanadas"><p>Partidas ganadas</p><p>0</p></div>
                            </div> 

                          </div>

                    </div>


                    <div className="actionsContainer" id="aContainer1" style={{display: "block"}}>

                    <Button textoDelBoton="Comenzar" tipoDeBoton="primary" onClick={()=>{setMainContainer(false)}} btnDisabled={false} />
                    
                    </div>

              </div>

              {/*  aca comienza el contenido 2 */}
              
              <div className="contenido2"  style={mainContainer === true ?  {display: "none"} : {visibility: "visible"}}>

                    <TicTacToe user1={userName1} user2={userName2}/>

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

<Jugador numeroDeJugador={1} nombreJugador="Jugador 1" iconoDeJugador={true} conteoDePartidas={false} />
<Jugador numeroDeJugador={2} nombreJugador="Jugador 2" iconoDeJugador={false} conteoDePartidas={false} /> 

<Jugador numeroDeJugador={1} nombreJugador="Jugador 1" iconoDeJugador={true} conteoDePartidas={true} display='none'/>
<Jugador numeroDeJugador={2} nombreJugador="Jugador 2" iconoDeJugador={false} conteoDePartidas={true} display='none'/>

*/
                    