import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Contacto from "./pages/Contacto";
import Carrousel from "./components/Carrousel";
import Servicios from "./pages/Servicios";
import Turnos from "./pages/Turnos";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route />
        </Routes>
        <Carrousel/>
        <Turnos/>
        <Servicios/>
        <Contacto/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
