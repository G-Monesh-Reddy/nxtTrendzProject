import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalValue = cartList
        .map(item => item.price * item.quantity)
        .reduce((acc, curr) => acc + curr, 0)
      const totalQuantity = cartList
        .map(item => item.quantity) // Extracting quantity for each item
        .reduce((acc, curr) => acc + curr, 0) // Summing up all the quantities

      return (
        <div className="cart-summary">
          <p className="cart-summary-p">Order Total:{totalValue}</p>
          <p className="cart-summary-p">{totalQuantity} items in cart</p>
          <button type="button" className="cart-summary-button ">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
