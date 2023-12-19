import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./Pages/Basket";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
