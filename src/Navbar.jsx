import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blood donors</h1>
      <div className="links">
      <Link to="/">Home</Link>
        <Link to="/list">List of donors</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Donor
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
