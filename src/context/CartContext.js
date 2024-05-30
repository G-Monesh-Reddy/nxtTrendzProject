import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeAllItem: () => {},
})

export default CartContext
