import { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setcartProducts] = useState([]);
  return (
    <CartContext.Provider value={{ cartProducts }}>
      {children}
    </CartContext.Provider>
  );
}
