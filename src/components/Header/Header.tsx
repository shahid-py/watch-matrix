import "./Header.css";
import { Link} from "react-router-dom";
export function Header() {
    //const navigate = useNavigate();


    return (
        <div>
          <nav>
            <div className="logo">
              <Link to="/">
                <button className="btn btn-primary">MATRIX</button>
                </Link>
              </div>
        
      </nav>
    </div>
  );
}