import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div 
          className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 text-center shadow-2xl relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${IMAGES.hero}")`
          }}
        >
          <div className="flex flex-col gap-4 z-10 animate-fade-in-up">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black font-display leading-tight drop-shadow-md">
              Bolos Artesanais para <br/> Momentos Especiais
            </h1>
            <h2 className="text-white text-lg md:text-xl font-medium font-sans max-w-2xl mx-auto drop-shadow-sm">
              Feitos com paixão e os melhores ingredientes para celebrar suas datas mais importantes.
            </h2>
          </div>
          <button 
            onClick={scrollToContact}
            className="z-10 flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-wide hover:bg-pink-600 transition-all mt-6 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="truncate">Faça seu Pedido</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;