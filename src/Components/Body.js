import React from 'react';
import Dbjson from '../Data/db.json';
import Product from './Product';


export default function Body() {
  return (
    <div className="lista">
      {Dbjson.products?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

// PRODUTOS LISTADOS NA PÁGINA INICIAL
// PRODUTOS FORAM LISTADOS PARA O COMPONENTE PRODUCT.JS

  