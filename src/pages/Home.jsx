import { useState, useMemo } from 'react';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';
import CategoryFilter from '../components/CategoryFilter';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCertifications = useMemo(() => {
    return certifications.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || cert.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="home">
      <div className="home__filters">
        <input
          type="text"
          placeholder="Search certifications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="home__search"
        />
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