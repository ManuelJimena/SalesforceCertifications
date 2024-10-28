import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CertificationCard({ certification }) {
  return (
    <Link to={`/certification/${certification.id}`} className="certification-card">
      <img 
        src={certification.image} 
        alt={certification.title} 
        className="certification-card__image"
      />
      <div className="certification-card__content">
        <h3 className="certification-card__title">{certification.title}</h3>
        <p className="certification-card__description">{certification.description}</p>
        <span className="certification-card__category">{certification.category}</span>
      </div>
    </Link>
  );
}

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CertificationCard;