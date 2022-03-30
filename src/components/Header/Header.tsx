import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

export function Header() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <button className="btn btn-primary">MATRIX</button>
          </Link>

          <Link to="/liked">
            <button className="btn btn-primary">Liked</button>
          </Link>

          <Link to="/history">
            <button className="btn btn-primary">History</button>
          </Link>

          <button
            className="btn btn-primary"
            onClick={() => (token ? logout() : navigate("/login"))}
          >
            {token ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </div>
  );
}
