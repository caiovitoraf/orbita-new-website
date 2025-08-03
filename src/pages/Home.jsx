import React from 'react';
import Hero from './Home/Hero';
import Diferenciais from './Home/Diferenciais';
import AbordEstrat from './Home/AbordEstrat';
import NossasSolucoes from './Home/NossasSolucoes';
import AprovacaoSocial from './Home/AprovacaoSocial';

function Home() {
  return (
    <>
      <Hero />
      <AbordEstrat />
      <Diferenciais />
      <NossasSolucoes />
      <AprovacaoSocial />
    </>
  );
}

export default Home;