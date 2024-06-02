import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollection/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/offers/offer'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
export default Shop
