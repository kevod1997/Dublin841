import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Carrousel from "./components/Carrousel";
import Home from "./pages/Home";
import {TurnProvider} from './context/TurnContext'
import TurnForm from "./components/TurnForm";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <TurnProvider> */}
        <NavBar />
        <Carrousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<TurnForm/>}/>
        </Routes>
        <Footer />
      {/* </TurnProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
