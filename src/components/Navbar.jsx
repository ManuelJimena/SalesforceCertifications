import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search functionality
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar__logo">
          Salesforce Certifications
        </Link>
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search certifications..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;