import { FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div>© {currentYear} Manuel Jimena García</div>
        <a
          href="https://github.com/ManuelJimena"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;