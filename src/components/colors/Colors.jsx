import "./colors.styles.css";
import { useState, useEffect, useMemo } from "react";
import { COLORS } from "../../data/colors";
import { Link } from "react-router-dom";

const Colors = () => {
  const [estado, setEstado] = useState("initial");
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [gameColors, setGameColors] = useState([]);
  // asigna el color correcto a un boton
  const correctColor = useMemo(
    () => gameColors.find((color) => color.correct),
    [gameColors]
  );

  const handlePlay = () => {
    setEstado("playing");
    setTime(0);
    setScore(0);
    const [correctColor, wrongColor] = COLORS.slice().sort(
      () => Math.random() - 0.5
    );
    // mezcla los colores y coloca uno como correcto
    setGameColors(
      [{ ...correctColor, correct: true }, wrongColor].sort(
        () => Math.random() - 0.5
      )
    );
  };

  function handleColor(selectedColor) {
    if (selectedColor.correct) {
      setScore((score) => score + 1);
      if (score === 9) {
        alert("El juego ha terminado!");
        setEstado("finish");
      } else {
        const [correctColor, wrongColor] = COLORS.slice().sort(
          () => Math.random() - 0.5
        );
        setGameColors(
          [{ ...correctColor, correct: true }, wrongColor].sort(
            () => Math.random() - 0.5
          )
        );
      }
    } else {
      setScore((score) => score - 1);
    }
  }

  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the
  `useEffect` hook is used to start and stop a timer based on the value of the `estado` state
  variable. */
  useEffect(() => {
    let interval;
    if (estado === "playing") {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [estado]);

  return (
    <main>
      <header>
        <h2>{score} puntos</h2>
        <h2>{time} Segundos</h2>
      </header>
      {estado === "playing" && (
        <span>
          <h1 style={{ color: gameColors[0].color }}>{correctColor.name}</h1>
        </span>
      )}
      {estado === "initial" && <button onClick={handlePlay}>Jugar</button>}
      {estado === "finish" && <button onClick={handlePlay}>Reiniciar</button>}
      {estado === "playing" && (
        <div className="btn-container">
          <button
            onClick={() => handleColor(gameColors[0])}
            style={{
              width: 92,
              height: 92,
              backgroundColor: gameColors[0].color,
            }}
          ></button>
          <button
            onClick={() => handleColor(gameColors[1])}
            style={{
              width: 92,
              height: 92,
              backgroundColor: gameColors[1].color,
            }}
          ></button>
        </div>
      )}
      <Link to="/">Home</Link>
    </main>
  );
};

export default Colors;
