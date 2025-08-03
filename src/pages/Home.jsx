import React from 'react';
import Hero from './Home/Hero';
import Diferenciais from './Home/Diferenciais';
import AbordEstrat from './Home/AbordEstrat';
import NossasSolucoes from './Home/NossasSolucoes';
import AprovacaoSocial from './Home/AprovacaoSocial';
import Carrossel from './Home/Carrossel';
import Cta from './Home/Cta';

function Home() {
  return (
    <>
      <Hero />
      <AbordEstrat />
      <Diferenciais />
      <NossasSolucoes />
      <Carrossel />
      <AprovacaoSocial />
      <Cta />
    </>
  );
}

export default Home;