import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-primary/5 dark:bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-text-light dark:text-text-dark">Nossa Galeria</h2>
          <p className="text-lg mt-4 text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
            Inspire-se com algumas de nossas criações mais recentes. Do clássico ao contemporâneo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {IMAGES.gallery.map((url, index) => (
            <div key={index} className="group aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 relative cursor-pointer">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url("${url}")` }}
              ></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;