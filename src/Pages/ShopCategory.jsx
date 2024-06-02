import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdownIcon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)

  return <div className="shop-category">
    <img className='shopcategory-banner' src={props.banner} alt="" />
    <div className="shopcategory-indexsort">
        <p>
            <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
            Sort by <img src={dropdownIcon} alt="" />
        </div>
    </div>
    <div className="shopcategory-products">
        {all_product.map((item, i)=> {
            if (props.category === item.category) {
                const { id, name, image, new_price, old_price } = item
                return (
                  <Item
                    key={i}
                    id={id}
                    name={name}
                    image={image}
                    new_price={new_price}
                    old_price={old_price}
                  />
                )
            }
        })}
    </div>
    <div className="shopcategory-loadmore">
        Explore more
    </div>
  </div>
}
export default ShopCategory
