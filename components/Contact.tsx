import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Obrigado, ${formData.name}! Recebemos sua mensagem.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-text-light dark:text-text-dark">Entre em Contato</h2>
          <p className="text-lg mt-4 text-text-light/80 dark:text-text-dark/80">
            Vamos criar o bolo dos seus sonhos juntos! Preencha o formulário ou nos chame.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <form onSubmit={handleSubmit} className="flex-1 space-y-6 bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-text-light dark:text-text-dark ml-1">Nome</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu Nome" 
                className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-5 transition-all outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-text-light dark:text-text-dark ml-1">E-mail</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu E-mail" 
                className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-5 transition-all outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-text-light dark:text-text-dark ml-1">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva seu pedido ou dúvida..." 
                className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-background-dark/50 focus:border-primary focus:ring-primary p-5 transition-all outline-none resize-none"
              ></textarea>
            </div>
            <button 
                type="submit" 
                className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-10">
            <div className="flex flex-col items-center md:items-start gap-3 group">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors text-primary">
                <span className="material-symbols-outlined text-3xl">phone</span>
              </div>
              <div>
                 <h3 className="font-bold text-lg mb-1">Telefone</h3>
                 <p className="text-text-light/80 dark:text-text-dark/80 hover:text-primary transition-colors cursor-pointer">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-3 group">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors text-primary">
                <span className="material-symbols-outlined text-3xl">email</span>
              </div>
              <div>
                 <h3 className="font-bold text-lg mb-1">E-mail</h3>
                 <p className="text-text-light/80 dark:text-text-dark/80 hover:text-primary transition-colors cursor-pointer">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 group">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors text-primary">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
               <div>
                 <h3 className="font-bold text-lg mb-1">Localização</h3>
                 <p className="text-text-light/80 dark:text-text-dark/80">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;