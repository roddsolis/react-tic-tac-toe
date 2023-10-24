import TicTacToeItems from "/src/components/TicTacToeItems.jsx"


const TicTacToe = ({iconoDeJugador}) => {

  
 /*  let posicionA1 = document.querySelector('#A1') */


  return (
    <>
      
      <div className="tiTacToeContainer">
        <div className="row1">
        <TicTacToeItems borderT="none" /* borderR="none" */ /* borderB="none" */ borderL="none"/>
        <TicTacToeItems borderT="none" borderR="none" /* borderB="none" */ borderL="none"/>
        <TicTacToeItems borderT="none" borderR="none" /* borderB="none" borderL="none" *//>
        </div>
        <div className="row2">
        <TicTacToeItems borderT="none" borderR="none" borderB="none" borderL="none"/>
        <TicTacToeItems borderT="none" /* borderR="none" */ borderB="none" /* borderL="none" *//>
        <TicTacToeItems borderT="none" borderR="none" borderB="none" borderL="none"/>
        </div>
        <div className="row3">
        <TicTacToeItems /* borderT="none" borderR="none" */ borderB="none" borderL="none"/>
        <TicTacToeItems /* borderT="none" */ borderR="none" borderB="none" borderL="none"/>
        <TicTacToeItems /* borderT="none" */ borderR="none" borderB="none"/*  borderL="none" *//>
        </div>
      </div>
      
    </>
  )
}

export default TicTacToe


{/*  <table>
        <tbody>
        <tr>
            <td id="A1" value={1}><Iconos iconSize="fit-content"  iconBorder="none" iconShadow="none" iconBackground iconScale="240%"/></td>
            <td id="B1">B1</td>
            <td id="C1">C1</td>
        </tr>
        <tr>
            <td id="A2">A2</td>
            <td id="B2">B2</td>
            <td id="C2">C2</td>
        </tr>
        <tr>
            <td id="A3">A3</td>
            <td id="B3">B3</td>
            <td id="C3">C3</td>
        </tr>
        </tbody>
      </table> */}