
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-end justify-start">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/5f150675-f2a3-49fd-bd22-306c807346b2.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 pb-8 pl-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
          FRIENDS OF ARMADALE
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
