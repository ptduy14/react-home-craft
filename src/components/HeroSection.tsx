
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/8b03f4d8-b54e-40ca-9fd6-3f3bfc690b41.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
          FRIENDS OF ARMADALE
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Discover the heart of your neighborhood
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
