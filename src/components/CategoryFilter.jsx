import PropTypes from 'prop-types';
import { categories } from '../data/certifications';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <select 
        value={selectedCategory} 
        onChange={(e) => onCategoryChange(e.target.value)}
        className="category-filter__select"
      >
        <option value="">Todas las Categorías</option>
        {Object.entries(categories).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;