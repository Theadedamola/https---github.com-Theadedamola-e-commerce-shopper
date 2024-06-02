import './ProductDisplay.css'
import starIcon from '../Assets/star_icon.png'
import stardullIcon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="product-display">
      <div className="productdisplay-left">
        <div className="productdisplay-image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={stardullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          mollitia dolorem, quas voluptatem amet natus odio, soluta quibusdam
          nesciunt!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id)
          }}
        >
          Add to cart
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-shirt, crop top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  )
}
export default ProductDisplay
