import "../styles/navbar.css"; // Importing the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}
