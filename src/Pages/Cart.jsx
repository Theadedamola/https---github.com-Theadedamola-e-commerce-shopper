import CartItems from '../Components/CartItems/CartItems'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const Cart = () => {
     const { all_product } = useContext(ShopContext)
     const { productId } = useParams()
     const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <CartItems product={product} />
    </div>
  )
}
export default Cart
