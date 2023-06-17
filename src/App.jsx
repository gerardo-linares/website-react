import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./modules/Home";
import Valoration from "./modules/Valoration";
import NudaProp from "./modules/NudaProp";
import Digital from "./modules/Digital";
import Vpo from "./modules/Vpo";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valoracion" element={<Valoration />} />
        <Route path="/nudapropiedad" element={<NudaProp />} />
        <Route path="/digitalizacion" element={<Digital />} />
        <Route path="/vpo" element={<Vpo />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
