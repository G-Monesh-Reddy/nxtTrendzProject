import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView/index'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllItem} = value
      const removeAll = () => {
        removeAllItem()
      }
      const showEmptyView = cartList.length === 0

      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <div className="cart-header">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="cart-but"
                    onClick={removeAll}
                  >
                    Remove all
                  </button>
                </div>

                <CartListView />
                <CartSummary />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
