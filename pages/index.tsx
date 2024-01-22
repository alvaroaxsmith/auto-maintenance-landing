import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Auto Maintenance - Serviços de Manutenção Automotiva</title>
        <meta name="description" content="Oferecemos serviços de manutenção automotiva de alta qualidade. Entre em contato conosco para obter mais informações." />
        <meta name="keywords" content="manutenção automotiva, serviços automotivos, mecânica de carros" />
        <meta name="author" content="Nome da Sua Empresa" />
        <meta property="og:title" content="Auto Maintenance - Serviços de Manutenção Automotiva" />
        <meta property="og:description" content="Oferecemos serviços de manutenção automotiva de alta qualidade. Entre em contato conosco para obter mais informações." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.seudominio.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <HeroSection />
        <ServicesSection id="services" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
