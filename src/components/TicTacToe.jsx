import TicTacToeItems from "/src/components/TicTacToeItems.jsx";
import Iconos from './Iconos'
import Input from './Input'
import { useState, useEffect } from "react";

const TicTacToe = ({user1, user2}) => {


  const [simboloX ,setSimboloX  ] = useState(true);
  const [simbol ,setSimbol  ] = useState(Array(9).fill(null));

  const handleClick =(i)=>{

    if (simbol[i] || obtenerGanador(simbol)) {
      return;
    }
    const nextSimbol = simbol.slice();
    nextSimbol[i] = "X";
    

    if (simboloX) {
      nextSimbol[i] = "X";
    } else {
      nextSimbol[i] = "O";
    }
    
    setSimboloX(!simboloX);
    setSimbol(nextSimbol);

  }

  function obtenerGanador(simbol) {
    const lineas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lineas.length; i++) {
      const [a, b, c] = lineas[i];
      if (simbol[a] && simbol[a] === simbol[b] && simbol[a] === simbol[c]) {
        return simbol[a];
      }
    }
    return null;
  }


  

  let ganador = obtenerGanador(simbol);

 


  let status;

  if (ganador) {
    status = "ganador: " + ganador;
    console.log(status)
  } else {
    status = "Turno de " + (simboloX ? user1 : user2); 
    console.log(status)
  }

  if(status == "ganador: X"){
    status = `${user1} ganaste la partida!!`
  }

  if(status == "ganador: O"){
    status = `${user2} ganaste la partida!!`
  }

  let contador1 = 0
  let contador2 = 0

  if(status === `${user1} ganaste la partida!!`){
    contador1++
  }else if(status === `${user2} ganaste la partida!!`){
    contador2++
  }

  return (
    <>
      <div className="gameContainer2">
                    
                    <div className='jugador1'>
                          
                            <div className="rowContainer"> 
                            <Iconos iconoDeJugador={true}/>
                            <p>{user1}</p> 
                            </div>

                            <div className="rowContainer" style={{paddingBottom: "0", display: 'none'}}>
                            <Input idJugador='jugador1' display='block' inputChange={(e=>{setUserName1(e.target.value)})}/>  
                            </div>

                            <div className="rowContainer" style={{display: "block" , paddingBottom: "0"}}>
                            <div className="conteoDePartidasGanadas"><p>Partidas ganadas</p><p>{contador1}</p></div>
                            </div> 

                    </div>
                    
                    <div className='titactoeWrapper' >
                          <h6>{status}</h6>
                          <div className="tiTacToeContainer">
                            <div className="row1">
                              <TicTacToeItems valor={simbol[0]} clickEnElCuadrado={() => handleClick(0)}/>
                              <TicTacToeItems valor={simbol[1]} clickEnElCuadrado={() => handleClick(1)}/>
                              <TicTacToeItems valor={simbol[2]} clickEnElCuadrado={() => handleClick(2)}/>
                            </div>
                            <div className="row2">
                              <TicTacToeItems valor={simbol[3]} clickEnElCuadrado={() => handleClick(3)}/>
                              <TicTacToeItems valor={simbol[4]} clickEnElCuadrado={() => handleClick(4)}/>
                              <TicTacToeItems valor={simbol[5]} clickEnElCuadrado={() => handleClick(5)}/>
                            </div>
                            <div className="row3">
                              <TicTacToeItems valor={simbol[6]} clickEnElCuadrado={() => handleClick(6)}/>
                              <TicTacToeItems valor={simbol[7]} clickEnElCuadrado={() => handleClick(7)}/>
                              <TicTacToeItems valor={simbol[8]} clickEnElCuadrado={() => handleClick(8)}/>
                            </div>
                          </div>
                          </div>

                    <div className='jugador2'>
                          
                            <div className="rowContainer"> 
                            <Iconos iconoDeJugador={false}/>
                            <p>{user2}</p> 
                            </div>

                            <div className="rowContainer" style={{paddingBottom: "0", display: 'none'}}>
                            <Input idJugador='jugador2' display='block' inputChange={(e=>{setUserName2(e.target.value)})}/>  
                            </div>

                            <div className="rowContainer" style={{display: "block" , paddingBottom: "0"}}>
                            <div className="conteoDePartidasGanadas"><p>Partidas ganadas</p><p>{contador2}</p></div>
                            {console.log(status)}
                            </div> 

                    </div>
                

                </div>
                


      
    </>
    
  );
};

export default TicTacToe;
