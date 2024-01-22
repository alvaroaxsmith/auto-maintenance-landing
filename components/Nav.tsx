// components/Nav.tsx
import Link from 'next/link';
import { IoConstructOutline } from 'react-icons/io5';

interface NavProps {
  scrolled: boolean;
}
const Nav: React.FC<NavProps> = ({ scrolled }) => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <IoConstructOutline></IoConstructOutline>
          <Link href="/" className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
            Auto Maintenance
          </Link>
        </div >
        <div className="hidden md:flex space-x-2 md:space-x-4">
          <Link className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-white'}`} href="#services">
            Serviços
          </Link>
          <Link className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-white'}`} href="#contact">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
