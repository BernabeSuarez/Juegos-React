import "./colors.styles.css";
import { useState, useEffect } from "react";

const COLORS = [
  {
    name: "Rojo",
    color: "#f00",
  },
  {
    name: "Azul",
    color: "#1900ff",
  },
  {
    name: "verde",
    color: "#01a009",
  },
  {
    name: "Naranja",
    color: "#ff7b00",
  },
];

const Colors = () => {
  const [estado, setEstado] = useState("initial");
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState(null);
  const [wrongColor, setWrongColor] = useState(null);

  const hadlePlay = () => {
    setEstado("playing");
    setTime(0);
    setScore(0);
    const [color, wrongColor] = COLORS.slice().sort(() => Math.random() - 0.5);
    setColor(color);
    setWrongColor(wrongColor); //Escoje un color random para los botones y la palabra
  };

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
          <h1 style={{ color: wrongColor.color }}>{color?.name}</h1>
        </span>
      )}
      {estado === "initial" && <button onClick={hadlePlay}>Jugar</button>}
      {estado === "finish" && (
        <button onClick={() => setEstado("initial")}>Reiniciar</button>
      )}
      {estado === "playing" && color && (
        <div className="btn-container">
          <button
            style={{ width: 92, height: 92, backgroundColor: color.color }}
          ></button>
          <button
            style={{ width: 92, height: 92, backgroundColor: wrongColor.color }}
          ></button>
        </div>
      )}
    </main>
  );
};

export default Colors;
