// components/Footer.tsx
import { IoConstructOutline } from 'react-icons/io5';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
      <div className="flex items-center justify-center">
        <span className="text-xs md:text-base mr-2 md:mr-4"> &copy; 2024</span>
        <IoConstructOutline className="w-5 h-5 mr-2" />
        <span className="text-xs md:text-base"> Auto Maintenance. Todos os direitos reservados.</span>
      </div>
      <p className="text-xs mt-2">
        Feito por <a href="https://github.com/alvaroaxsmith" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Alvaro Ferreira</a>
      </p>
    </footer>
  );
};

export default Footer;
