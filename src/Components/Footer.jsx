import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-sm">&copy; 2024 Portfólio - Matheus Marcelino. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/matheusmarcelino1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-marcelino-90552a259/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://www.instagram.com/_meninomath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-3xl hover:text-gray-400 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
