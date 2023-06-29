import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>React Games</h1>
      <h2>Juego de Memoria</h2>
      <p>Jugo de memoria realizado con React</p>
      <Link to="/memotest">Ir a jugar</Link>
      <h2>Rapidez mental</h2>
      <p>
        juego de rapidez mental, consiste en presionar el boton del color que
        indica la palabra lo mas rapido posible
      </p>
      <Link to="/colors">Ir a jugar</Link>
    </div>
  );
};

export default Home;
