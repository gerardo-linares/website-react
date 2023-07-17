import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./modules/Home";
import Valoration from "./modules/Valoration";
import NudaProp from "./modules/NudaProp";
import Digital from "./modules/Digital";
import Vpo from "./modules/Vpo";
import Seguro from "./modules/Seguro";
import Cartera from "./modules/Cartera";
import Certificado from "./modules/Certificado";
import Franquicia from "./modules/Franquicia";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center text-4xl text-primary mt-80 font-slogan">
          Cargando el sitio...
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/valoracion" element={<Valoration />} />
            <Route path="/nudapropiedad" element={<NudaProp />} />
            <Route path="/digitalizacion" element={<Digital />} />
            <Route path="/Seguro" element={<Seguro />} />
            <Route path="/franquicia" element={<Franquicia />} />
            <Route path="/cartera" element={<Cartera />} />
            <Route path="/certificado" element={<Certificado />} />
            <Route path="/vpo" element={<Vpo />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
