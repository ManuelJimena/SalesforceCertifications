import { useState, useMemo } from 'react';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';
import CategoryFilter from '../components/CategoryFilter';
import { FaSearch } from 'react-icons/fa';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCertifications = useMemo(() => {
    return certifications.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Si hay una búsqueda activa, ignoramos el filtro de categoría
      if (searchQuery) {
        return matchesSearch;
      }
      
      // Si no hay búsqueda, aplicamos solo el filtro de categoría
      return !selectedCategory || cert.category === selectedCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="home">
      <div className="home__filters">
        <div className="home__search-container">
          <FaSearch className="home__search-icon" />
          <input
            type="text"
            placeholder="Buscar certificaciones..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="home__search"
          />
        </div>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <div className="certifications-grid">
        {filteredCertifications.map(certification => (
          <CertificationCard
            key={certification.id}
            certification={certification}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;