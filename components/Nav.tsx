// components/Nav.tsx
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref className="text-white text-xl font-bold" id="link">Home</Link>
        {/* Adicione mais links conforme necessário */}
      </div>
    </nav>
  );
};

export default Nav;
