import React from 'react';
import NumberCart from './NumberCart';

export default function Header() {
  return (
    <div className="top">
      <div className="title">
        <br />
        <img
          src="https://www.conferecartoes.com.br/hubfs/confere-shop-logo.png"
          width="300px"
          alt="Logo"
        />
      </div>
      <br />
      <div className="barra">
        <div>
          <p>
            <strong>Fique linda com nossos looks!</strong>
          </p>
          <p>Adicione no carrinho para comprar.</p>
        </div>
        <div className="cart">
          <div>
            <a href="/Carrinho">
            <img
              src={
                'https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png'
              }
              width="50px"
              alt="Ver carrinho"
            />
          </a>
          </div>
          
           <NumberCart/>
          
        </div>
      </div>
    </div>
  );
}

// CABECALHO ONDE ESTÁ O ÍCONE DO CARRINHO
