import { useParams } from 'react-router-dom';
import { certifications } from '../data/certifications';

function CertificationDetail() {
  const { id } = useParams();
  const certification = certifications.find(cert => cert.id === id);

  if (!certification) {
    return <div>Certification not found</div>;
  }

  return (
    <div className="certification-detail">
      <div className="certification-detail__header">
        <img 
          src={certification.image} 
          alt={certification.title} 
          className="certification-detail__image"
        />
        <div className="certification-detail__info">
          <h1>{certification.title}</h1>
          <p>{certification.description}</p>
          <span className="certification-detail__category">{certification.category}</span>
        </div>
      </div>

      <div className="certification-detail__content">
        <section className="certification-detail__section">
          <h2>Exam Topics</h2>
          <div className="certification-detail__topics">
            {certification.topics.map(topic => (
              <div key={topic.name} className="certification-detail__topic">
                <span>{topic.name}</span>
                <span>{topic.percentage}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="certification-detail__section">
          <h2>Exam Details</h2>
          <div className="certification-detail__exam-details">
            <div>Questions: {certification.examDetails.questions}</div>
            <div>Passing Score: {certification.examDetails.passingScore}%</div>
            <div>Duration: {certification.examDetails.duration} minutes</div>
            <div>Price: ${certification.examDetails.price}</div>
            <div>Retake Price: ${certification.examDetails.retakePrice}</div>
          </div>
        </section>

        <section className="certification-detail__section">
          <h2>Resources</h2>
          <div className="certification-detail__resources">
            <a href={certification.resources.trailhead} target="_blank" rel="noopener noreferrer">
              Official Trailhead Guide
            </a>
            <a href={certification.resources.trailmix} target="_blank" rel="noopener noreferrer">
              Trailmix Study Guide
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CertificationDetail;