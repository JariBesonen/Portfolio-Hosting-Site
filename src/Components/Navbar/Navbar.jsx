import "./Navbar.css";
function Navbar() {
  return (
    <nav className="site-navbar">
      <a className="site-navbar-brand" href="#top">
        JB
      </a>
      <ul className="site-navbar-links">
        <li>
          <a href="#project-01">Projects</a>
        </li>
        <li>
          <a href="#tech-stack">Toolkit</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
