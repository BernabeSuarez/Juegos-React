import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Memotest from "./components/Memotest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memotest" element={<Memotest />} />
    </Routes>
  );
}

export default App;
