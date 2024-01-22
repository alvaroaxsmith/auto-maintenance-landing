// components/HeroSection.tsx
const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white p-8 flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Serviços de Manutenção Automotiva</h2>
        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-200">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
