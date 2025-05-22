
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
      <button 
        onClick={scrollToContent}
        className="flex flex-col items-center text-ifal-dark/80 hover:text-ifal-dark transition-colors"
      >
        <span className="mb-2 text-sm">Rolar para baixo</span>
        <ChevronDown className="animate-pulse-bounce" size={24} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
