import TicTacToeItems from "/src/components/TicTacToeItems.jsx";
import { useState, useEffect } from "react";

const TicTacToe = () => {


  let icons = [
    [true, <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M2.5 10H3.5V17H2.5V16H1.5V11H2.5V10Z" fill="#12E292"/>
    <path d="M19.5 7H18.5V6H13.5V3H11.5V6H6.5V7H5.5V8H4.5V18H5.5V19H6.5V20H18.5V19H19.5V18H20.5V8H19.5V7ZM17.5 13H14.5V10H17.5V13ZM13.5 17H11.5V16H13.5V17ZM7.5 16H10.5V17H7.5V16ZM7.5 10H10.5V13H7.5V10ZM14.5 17V16H17.5V17H14.5Z" fill="#12E292"/>
    <path d="M23.5 11V16H22.5V17H21.5V10H22.5V11H23.5Z" fill="#12E292"/>
  </svg>],

    [false, <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_9_914)">
      <path d="M18.3333 5.83331V4.99998H17.4999V4.16665H16.6666V3.33331H15.8333V2.49998H14.9999V1.66665H14.1666V0.833313H1.66659V1.66665H0.833252V18.3333H1.66659V19.1666H18.3333V18.3333H19.1666V5.83331H18.3333ZM7.49992 15.8333V12.5H8.33325V11.6666H11.6666V12.5H12.4999V15.8333H11.6666V16.6666H8.33325V15.8333H7.49992ZM13.3333 8.33331H3.33325V3.33331H13.3333V8.33331Z" fill="#12E292"/></g>
    <defs><clipPath id="clip0_9_914"><rect width="20" height="20" fill="white"/></clipPath></defs>
  </svg> ],
  null
]


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

  const ganador = obtenerGanador(simbol);
  let status;
  if (ganador) {
    status = "ganador: " + ganador;
  } else {
    status = "Siguiente jugador: " + (simboloX ? "X" : "O");
  }


  return (
    <>
      <div className="status">{status}</div>
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
    </>
  );
};

export default TicTacToe;
