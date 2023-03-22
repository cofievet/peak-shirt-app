import React from "react";
import { node } from "prop-types";

const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}

const reduce = (state, action) => {
  switch (action.type) {
    case "add":
      return [];

    case "remove":
      return [];

    case "purchase":
      return [];

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = React.useReducer(reduce, [
    { id: 1, price: 123.6, name: "Tshirt 1", imageUrl: "1.jpg", quantity: 2 },
    { id: 2, price: 85.4, name: "Tshirt 2", imageUrl: "2.jpg", quantity: 1 },
    { id: 3, price: 85.4, name: "Tshirt 3", imageUrl: "3.jpg", quantity: 2 },
    { id: 4, price: 85.4, name: "Tshirt 4", imageUrl: "4.jpg", quantity: 5 },
  ]);

  const purchaseCart = () => dispatch({ type: "purchase" });
  const isCartEmpty = cart.length === 0;
  const cartQuatity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  return (
    <CartContext.Provider
      value={[{ cart, isCartEmpty, cartQuatity }, { purchaseCart }]}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
};
