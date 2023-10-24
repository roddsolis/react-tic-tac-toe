import Iconos from "/src/components/Iconos.jsx";


const TicTacToeItems = ({borderT, borderR, borderB, borderL}) => {



  return (
    <>
        <div className="ticTacToeItem" style={{borderTop: borderT ,borderRight: borderR ,borderBottom: borderB, borderLeft: borderL}}><Iconos iconSize="fit-content"  iconBorder="none" iconShadow="none" iconScale="240%" iconoDeJugador={false}/></div>
    </>
  )
}

export default TicTacToeItems
