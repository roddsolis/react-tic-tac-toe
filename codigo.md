      <div className="tiTacToeContainer">
        <div className="row1">
        <TicTacToeItems borderT="none" /* borderR="none" */ /* borderB="none" */ borderL="none" />
        <TicTacToeItems borderT="none" borderR="none" /* borderB="none" */ borderL="none"  />
        <TicTacToeItems borderT="none" borderR="none" /* borderB="none" borderL="none" */  />
        </div>
        <div className="row2">
        <TicTacToeItems borderT="none" borderR="none" borderB="none" borderL="none"  />
        <TicTacToeItems borderT="none" /* borderR="none" */ borderB="none" /* borderL="none" */  />
        <TicTacToeItems borderT="none" borderR="none" borderB="none" borderL="none"  />
        </div>
        <div className="row3">
        <TicTacToeItems /* borderT="none" borderR="none" */ borderB="none" borderL="none"  />
        <TicTacToeItems /* borderT="none" */ borderR="none" borderB="none" borderL="none"  />
        <TicTacToeItems /* borderT="none" */ borderR="none" borderB="none"/*  borderL="none" */  />
        </div>
      </div>


       <div className="ticTacToeItem" onClick={()=>{setJugador(false)}} style={{borderTop: borderT ,borderRight: borderR ,borderBottom: borderB, borderLeft: borderL}} >
          <Iconos iconSize="fit-content"  iconBorder="none" iconShadow="none" iconScale="240%" iconoDeJugador={setReset} />
          </div>

          los props

          {borderT, borderR, borderB, borderL }

          los states

           const [reset, setReset] = useState(null) 
  const [jugador, setJugador] = useState(true) 