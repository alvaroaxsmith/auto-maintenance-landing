// components/HeroSection.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export const textAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
};

const HeroSection: React.FC = () => {


  return (
    <section className="relative bg-blue-500 text-white p-8 flex items-center justify-center h-screen">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="text-center mx-20 text-2xl" // color: black text
        >
          <h2 className="text-5xl font-bold mb-4">Serviços de Manutenção Automotiva de Qualidade</h2>
          <p className="text-5lg mb-6">Bem-vindo à Auto Maintenance, o seu parceiro confiável para serviços de manutenção automotiva excepcionais.
            Oferecemos reparos elétricos, manutenção mecânica e serviços de limpeza e polimento para manter seu veículo em ótimo estado.</p>
          <a href="#services" className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-200">
            Saiba mais
          </a>
        </motion.div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1599256631012-9c2b32bfa8bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Manutenção Automotiva"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ filter: 'opacity(0.2)' }}
      />
    </section>
  );
};

export default HeroSection;
