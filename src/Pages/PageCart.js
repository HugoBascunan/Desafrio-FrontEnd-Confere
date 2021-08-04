import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';
import Dbjson from '../Data/db.json';
import { CartService } from '../services/CartService';


// Função Carrinho: pega a leitura dos produtos salvos em localStorage, mapeia em db.json para exibir apenas o produto escolhido.
export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartProducts = CartService.readCartProducts();

    const foundProducts = cartProducts.map(name => {
      return Dbjson.products.filter(p => p.name + ' ' + p['color_slug'] === name)[0];
    });

    setProducts(foundProducts);
  }, []);


  // o que aparece na tela
  return (
    <>
      <div className="top">
        <div className="title">
          <img
            src="https://www.conferecartoes.com.br/hubfs/confere-shop-logo.png"
            width="300px"
            alt="Logo"
          />
          
        </div>
        <div className='voltar'>
           <a href="/"><img src={'https://image.flaticon.com/icons/png/512/786/786197.png'} width="50px" alt="Voltar loja"/></a>
        </div>
        <div className="title2">
          <h1>Carrinho de Compras</h1>
        </div>
      </div>
      <div className="produtosCarrinho">
        <div className="finalCarrinho">
          <button className="btnFinal">Finalizar Compra</button>
        </div>
        <h2 className="titulolista">Lista de Produtos no Carrinho:</h2>
        <div className="lista">
          {products?.map((product, index) => (
            <Product key={index} product={product} fromCart={true} />
          ))}
        </div>
      </div>
    </>
  );
}

// PAGINA DO CARRINHO COM ROTA
