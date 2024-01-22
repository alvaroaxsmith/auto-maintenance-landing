// components/Header.tsx
import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-2 md:p-4 transition-all ${scrolled ? 'bg-white bg-opacity-70' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto">
        <h1 className={`text-xl md:text-3xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
          <Nav scrolled={scrolled} />
        </h1>
      </div>
    </header>
  );
};

export default Header;
