import { CartService } from "../services/CartService"



export default function NumberCart() 
{const products = CartService.readCartProducts()
      return (
      <div className='numCart'>
           {products.length}
          </div>
      )
}