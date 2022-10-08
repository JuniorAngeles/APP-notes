import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="menu">
      <h1 className="menu-title"> Notes App</h1>
      <nav className="menu-nav">
        <span className="menu-nav__link">
          <Link className="menu-nav__link" to="/">
            Inicio
          </Link>
        </span>
        <span className="menu-nav__link">
          <Link className="menu-nav__link" to="/create">
            Crear Nota
          </Link>
        </span>
        <span className="menu-nav__item">
          <Link className="menu-nav__link" to="/delete">
            Eliminar Todas
          </Link>
        </span>
      </nav>
    </header>
  );
}
