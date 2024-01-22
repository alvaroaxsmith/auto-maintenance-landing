// components/ContactSection.tsx

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = () => {
  // Adicione a lógica do formulário conforme necessário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Adicione lógica de envio de formulário fictício
    alert('Formulário enviado! (Fictício)');
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">Nome</label>
            <input type="text" id="name" name="name" className="w-full border rounded-md p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">E-mail</label>
            <input type="email" id="email" name="email" className="w-full border rounded-md p-2" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-600 mb-2">Mensagem</label>
            <textarea id="message" name="message" rows={4} className="w-full border rounded-md p-2" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Enviar Mensagem
          </button>
        </form>
        <p className="mt-4 text-gray-500">Você também pode nos ligar em: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default ContactSection;
