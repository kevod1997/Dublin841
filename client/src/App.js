import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Carrousel from "./components/Carrousel";
import Home from "./pages/Home";
import { TurnProvider } from "./context/TurnContext";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Admin/LoginPage";
import React from "react";

function App() {
  const isLoginPage = window.location.pathname === '/login';

  return (
    <>
      <AuthProvider>
        <TurnProvider>
          <BrowserRouter>
            {!isLoginPage && (
              <>
                <NavBar />
                <Carrousel />
              </>
            )}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            {!isLoginPage && <Footer />}
          </BrowserRouter>
        </TurnProvider>
      </AuthProvider>
    </>
  );
}

export default App;
