import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const RelatedProduct = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  )
}
export default RelatedProduct
