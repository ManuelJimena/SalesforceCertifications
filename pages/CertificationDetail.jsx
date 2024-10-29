import { useParams } from 'react-router-dom';
import { FaClock, FaQuestionCircle, FaPercentage, FaDollarSign, FaSync, FaChartLine } from 'react-icons/fa';
import { certifications } from '../data/certifications';

function CertificationDetail() {
  const { id } = useParams();
  const certification = certifications.find(cert => cert.id === id);

  if (!certification) {
    return <div>Certificación no encontrada</div>;
  }

  const getDifficultyLabel = (passingScore) => {
    if (passingScore >= 70) return { text: 'Difícil', color: '#dc3545' };
    if (passingScore >= 65) return { text: 'Intermedio', color: '#ffc107' };
    return { text: 'Básico', color: '#28a745' };
  };

  const difficulty = getDifficultyLabel(certification.examDetails.passingScore);

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
          <h2>Temas del Examen</h2>
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
          <h2>Detalles del Examen</h2>
          <div className="certification-detail__exam-details">
            <div className="exam-detail-item">
              <FaQuestionCircle className="exam-icon" />
              <span>Preguntas: {certification.examDetails.questions}</span>
            </div>
            <div className="exam-detail-item">
              <FaPercentage className="exam-icon" />
              <span>Puntuación para aprobar: {certification.examDetails.passingScore}%</span>
            </div>
            <div className="exam-detail-item">
              <FaClock className="exam-icon" />
              <span>Duración: {certification.examDetails.duration} minutos</span>
            </div>
            <div className="exam-detail-item">
              <FaDollarSign className="exam-icon" />
              <span>Precio: ${certification.examDetails.price}</span>
            </div>
            <div className="exam-detail-item">
              <FaSync className="exam-icon" />
              <span>Precio de repetición: ${certification.examDetails.retakePrice}</span>
            </div>
            <div className="exam-detail-item">
              <FaChartLine className="exam-icon" />
              <span>Nivel de dificultad: <span style={{ color: difficulty.color }}>{difficulty.text}</span></span>
            </div>
          </div>
        </section>

        <section className="certification-detail__section">
          <h2>Recursos</h2>
          <div className="certification-detail__resources">
            <a href={certification.resources.trailhead} target="_blank" rel="noopener noreferrer">
              Guía Oficial de Trailhead
            </a>
            <a href={certification.resources.trailmix} target="_blank" rel="noopener noreferrer">
              Guía de Estudio Trailmix
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CertificationDetail;