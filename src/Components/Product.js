import { useCallback } from 'react';
import { CartService } from '../services/CartService';


// COMPONENTE QUE ENVIA AS INFORMAÇÕES PARA PAGESTORE


export default function Product({ product, fromCart = false }) {

  //Chamada para adicionar o produto na PageCart.
  const handleAddToCart = useCallback(() => {
    CartService.addProductToCart(product);
    window.location.href = "/" //
  }, [product]);

  //Chamada para remover o produto adicionado na PageCart.
  const handleRemoveFromCart = useCallback((event) => {
    const id = event.target.attributes['data-product'].value;
    CartService.removeCartProduct(id);
    window.location.href = "/Carrinho";
  }, []);

  // Função para adicionar nos botões de Adicionar e Remover.
  // Adicionada a função de verificação de disponibilidade.
  const renderAddToCart = () => {
    if (product["on_sale"] === false) {
      return (
        <p className="availability">PRODUTO INDISPONÍVEL</p>
      )
    } if (!fromCart) {
      return (
        <button className="btn" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      );
    } else {
      return (
        <div>
          <button className="btn"
            data-product={product.name + ' ' + product['color_slug']}
            onClick={handleRemoveFromCart}>
            Remover do Carrinho
          </button>
        </div>
      );
    }
  };


  // Mostrar preço com desconto
  function Price() {
    if (product.discount_percentage !== "") {
      return (
        <p className="actualPrice"><strong>POR: {product.actual_price}</strong></p>
      )
    } else { return "" }
  }

  // Mostrar % do desconto
  function Percent() {
    if (product.discount_percentage !== "") {
      return (<p className="discPercent">* -{product.discount_percentage}</p>)
    } else { return "" }
  }

  // Renderizado no Cart dos produtos 
  return (
    <div className="produtos">
      <img
        className="imagem"
        src={product.image}
        width="250px"
        alt="Imagem do Produto"
      />
      <h3 className="name">{product.name}</h3>
      <div className="discDiv">
        <p className="regularPrice"><strong>{product.regular_price}</strong></p>
        {Percent()}
      </div>
      {Price()}
      <p>Em até {product.installments}</p>
      <select name='tamanho' id='tamanho'>
      <option value='PP'>PP</option>
      <option value='P'>P</option>
      <option value='M'>M</option>
      <option value='G'>G</option>
      <option value='GG'>GG</option>
      </select>
      {renderAddToCart()}
    </div>
  );
}
