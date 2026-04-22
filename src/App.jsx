import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-dot" />
        <span className="brand-name">Yadam Pujith</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2026 Yadam Pujith · Built with React</p>
        </footer>
      </div>
    </HashRouter>
  );
}
