import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-text-light dark:text-text-dark relative inline-block">
            Sobre Nós
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <div 
              className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-xl transform transition-transform hover:scale-[1.02] duration-500"
              role="img"
              aria-label="Confeiteira decorando um bolo"
              style={{ backgroundImage: `url("${IMAGES.about}")` }}
            ></div>
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-lg leading-relaxed text-text-light/90 dark:text-text-dark/90 font-sans">
              Nossa paixão é criar bolos únicos que não só parecem incríveis, mas também têm um sabor inesquecível.
            </p>
            <p className="text-lg leading-relaxed text-text-light/90 dark:text-text-dark/90 font-sans">
              Usamos apenas ingredientes da mais alta qualidade e dedicamo-nos a cada detalhe, desde a massa até a decoração final. Cada bolo é uma obra de arte, feita com amor para tornar seu momento ainda mais especial.
            </p>
            <div className="pt-4 flex justify-center md:justify-start gap-8">
                <div className="text-center">
                    <span className="block text-3xl font-bold text-primary font-display">5+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Anos de Experiência</span>
                </div>
                <div className="text-center">
                    <span className="block text-3xl font-bold text-primary font-display">1k+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Bolos Entregues</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;