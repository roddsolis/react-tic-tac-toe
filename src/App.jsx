import Jugador from "/src/components/Jugador.jsx";

const App = () => {
  return (
    <>
      {/* este es el titulo del juego */}
      <div className="titleContainer">
        <h1>Tic Tac Toe</h1>
        <h3>Whith</h3>
        <h1>React</h1>
      </div>
      <h6>Ingresa el nombre de ambos jugadores para comenzar.</h6>
      <Jugador  nombreJugador="Rodrigo" iconoDeJugador={false}/>
      <div />
    </>
  );
};

export default App;
