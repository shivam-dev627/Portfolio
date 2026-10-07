function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <h2>My Portfolio</h2>

      <div className="nav-links">

        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;