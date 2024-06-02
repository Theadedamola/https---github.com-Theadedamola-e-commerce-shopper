import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from '../Assets/cart_cross_icon.png'
import minusIcon from '../Assets/Minus.png'
import plusIcon from '../Assets/Plus.png'

const CartItems = () => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    deleteFromCart,
  } = useContext(ShopContext)
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        {/* <p>Price</p> */}
        <p>Total</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="cartitem-product-icon" />
                <p>{e.name}</p>
                {/* <p>${e.new_price}</p> */}
                <p>${e.new_price * cartItems[e.id]}</p>
                <div className="cart-reducer">
                  <button className="cartitems-quantity">
                    <img
                      onClick={() => {
                        removeFromCart(e.id)
                      }}
                      className="minus"
                      src={minusIcon}
                      alt=""
                    />
                  </button>
                  <button className="cartitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <button className="cartitems-quantity">
                    <img
                      onClick={() => {
                        addToCart(e.id)
                      }}
                      className="plus"
                      src={plusIcon}
                      alt=""
                    />
                  </button>
                </div>

                <img
                  className="cartitems-remove-icon"
                  src={removeIcon}
                  alt=""
                  onClick={() => {
                    deleteFromCart(e.id)
                  }}
                />
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping free</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItems
