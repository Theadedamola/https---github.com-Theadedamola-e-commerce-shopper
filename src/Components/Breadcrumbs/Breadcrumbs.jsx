import './Breadcrumbs.css'
import arrowIcon from '../Assets/breadcrum_arrow.png'

const Breadcrumbs = ({ product }) => {
  return (
    <div className="breadcrumbs">
      HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  )
}
export default Breadcrumbs
