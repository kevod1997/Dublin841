import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";

import Carrousel from "./components/Carrousel";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Carrousel />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
