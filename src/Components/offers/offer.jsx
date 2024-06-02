import './offer.css'
import exclusiveImage from '../Assets/offer_image.png'

const offer = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>only on best sellers product</p>
        <button>Check Now</button>
      </div>
      {/* <div className="offer-right">
        <img src={exclusiveImage} alt="" />
      </div> */}
    </div>
  )
}
export default offer
