import { Link } from 'react-router-dom';
import '../estilos/navbar.css';
import Weather from './Weather';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">App Lenguajes</h2>
      <div className="navbar-links">
        <Link to="/contacto" className="nav-link">Contacto</Link>
        <Link to="/upload" className="nav-link">Upload</Link>
        <Link to="/servicios" className="nav-link">Servicios</Link>
        <Weather />
      </div>
    </nav>
  );
}

export default Navbar;
