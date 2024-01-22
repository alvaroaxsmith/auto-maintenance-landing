// components/ServicesSection.tsx
import { motion, useAnimation } from 'framer-motion';
import { IoFlash, IoConstruct, IoColorPalette } from 'react-icons/io5';
import { textAnimation } from './HeroSection';
import { useEffect, useState } from 'react';

interface ServicesSectionProps {
  id: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const section = document.getElementById('services');

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          const isInView = scrollY + windowHeight > sectionTop && scrollY < sectionBottom;

          if (isInView) {
            controls.start('visible');
            setHasAnimated(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, hasAnimated]);

  const services = [
    { icon: <IoFlash size={32} />, title: 'Reparo Elétrico', description: 'Diagnosticamos e reparamos problemas elétricos em veículos.' },
    { icon: <IoConstruct size={32} />, title: 'Manutenção Mecânica', description: 'Realizamos manutenção mecânica preventiva e corretiva.' },
    { icon: <IoColorPalette size={32} />, title: 'Limpeza e Polimento', description: 'Serviços de limpeza e polimento para manter seu veículo brilhando.' },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={textAnimation}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <div className="text-blue-500 mx-auto mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
