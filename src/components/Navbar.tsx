import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="temporary-warning">
        ! This is only a temporary solution as long as AO3 is down !
      </div>
    </nav>
  );
}