import './Popular.css'
import Item from '../Items/Item'
import { useEffect, useState } from 'react'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data))
  }, [])

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
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
export default Popular
