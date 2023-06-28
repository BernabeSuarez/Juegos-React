import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Memotest from "./components/Memotest";
import Colors from "./components/colors/Colors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memotest" element={<Memotest />} />
      <Route path="/colors" element={<Colors />} />
    </Routes>
  );
}

export default App;
