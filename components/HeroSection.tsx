import { motion } from 'framer-motion';
import Image from 'next/image';

export const textAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-blue-500 text-white p-4 md:p-8 flex items-center justify-center h-screen">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="text-center mx-4 md:mx-20 text-sm md:text-2xl"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Serviços de Manutenção Automotiva de Qualidade</h2>
          <p className="text-lg md:text-2xl mb-6">Bem-vindo à Auto Maintenance, o seu parceiro confiável para serviços de manutenção automotiva excepcionais.
            Oferecemos reparos elétricos, manutenção mecânica e serviços de limpeza e polimento para manter seu veículo em ótimo estado.</p>
          <a href="#services" className="bg-white text-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-blue-200 text-sm md:text-base">
            Saiba mais
          </a>
        </motion.div>
      </div>
      <Image
        className="relative w-full h-64 md:h-auto md:w-96"
        src="https://images.unsplash.com/photo-1599256631012-9c2b32bfa8bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Manutenção Automotiva"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ filter: 'opacity(0.2)', backgroundImage: 'cover' }}
      />
    </section>
  );
};

export default HeroSection;
