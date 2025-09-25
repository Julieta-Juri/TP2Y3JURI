
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./componentes/home";
import Contacto from "./componentes/contacto";



function App() {
  return (
    
    <Router basename="/TP2Y3JURI/">
      <nav style={{ padding: "10px", background: "#abbbccff" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Inicio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
