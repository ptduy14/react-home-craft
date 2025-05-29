
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ExclusiveArmadale from '../components/ExclusiveArmadale';
import NeighbourhoodNews from '../components/NeighbourhoodNews';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ExclusiveArmadale />
      <NeighbourhoodNews />
      {/* Additional sections will be added here as we build them */}
    </Layout>
  );
};

export default Index;
