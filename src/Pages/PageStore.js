import React from 'react'
import Body from '../Components/Body';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function PageStore() {
  return (
      <div className='page'>
        <Header />
        <Body />
        <Footer />
      </div>
  );
}

//PÁGINA DA LOJA INICIAL COM ROTA