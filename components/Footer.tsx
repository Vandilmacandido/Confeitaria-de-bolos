import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary/5 dark:bg-primary/5 border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-text-light/70 dark:text-text-dark/70">
            © {new Date().getFullYear()} Confeitaria dos Sonhos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a 
                href="#" 
                className="text-text-light/60 hover:text-primary dark:text-text-dark/60 dark:hover:text-primary transition-colors transform hover:scale-110" 
                aria-label="Instagram"
            >
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.153 1.153 4.902 4.902 0 011.153 2.153c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 2.153 4.902 4.902 0 01-2.153 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.153-1.153 4.902 4.902 0 01-1.153-2.153c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-2.153A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.163 1.802h2.326c-.443.462-.83.963-1.163 1.524-.333-.561-.72-1.062-1.163-1.524zM8.45 3.802c-1.113 0-1.63.51-1.996 1.325-.367.816-.465 1.795-.465 3.875v5.332c0 .984.025 1.633.056 2.052.03.419.09.682.16.9.11.35.3.66.61.96.31.3.61.49.96.61.21.07.48.13.9.16.42.03.97.056 2.052.056h5.332c.984 0 1.633-.025 2.052-.056.419-.03.682-.09.9-.16.35-.11.66-.3.96-.61.3-.31.49-.61.61-.96.07-.21.13-.48.16-.9.03-.42.056-.97.056-2.052V9.002c0-2.08-.098-3.06-.465-3.875-.366-.816-.883-1.325-1.996-1.325H8.45zm5.851 5.093a3.562 3.562 0 11-7.124 0 3.562 3.562 0 017.124 0zM12 10.158a1.842 1.842 0 100 3.684 1.842 1.842 0 000-3.684zM16.402 7.59a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a 
                href="#" 
                className="text-text-light/60 hover:text-primary dark:text-text-dark/60 dark:hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Facebook"
            >
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;