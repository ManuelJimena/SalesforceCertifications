import { Link } from 'react-router-dom';
import { FaSalesforce } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar__logo">
          <FaSalesforce className="navbar__logo-icon" />
          <span>Certificaciones Salesforce</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;