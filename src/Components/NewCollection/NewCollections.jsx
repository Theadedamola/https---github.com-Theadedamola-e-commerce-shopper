import './NewCollections.css'
import Item from '../Items/Item'
import { useEffect, useState } from 'react'

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/newcollection')
      .then((response) => response.json())
      .then((data) => setNew_Collection(data))
  }, [])

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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
export default NewCollections
