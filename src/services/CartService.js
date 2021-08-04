import { StorageService } from "./StorageService";

//função para alocar valores do storage em na const cart.
const getCartOrDefault = () => {
    const cart = StorageService.getFromStorage('cart');
    
    if (cart)
        return cart;
    
    return { products: [] };
   
};

// função para adicionar, ler e remover os produtos da PageCart.
export const CartService = {
    addProductToCart(product) {
        const cart = getCartOrDefault();

        cart.products.push(product.name + ' ' + product['color_slug']);

        StorageService.addToStorage(cart, 'cart');
    },

    readCartProducts() {
        return getCartOrDefault().products;
        
    },

    removeCartProduct(name) {
        const cart = getCartOrDefault();
        const index = cart.products.indexOf(name);
     
        cart.products.splice(index, 1);
        StorageService.addToStorage(cart, 'cart');
    },
};
