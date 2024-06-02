import './Navbar.css'
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import navDropdown from '../Assets/List.png'

const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const menuRef = useRef()

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link
          onClick={() => {
            setMenu('shop')
          }}
          className="nav-logo"
          style={{ textDecoration: 'none', color: 'black' }}
          to="/"
        >
          <img src={logo} alt="brand logo" />
          <p>SHOPPER</p>
        </Link>
        {menu === 'shop' ? <hr /> : <></>}
      </div>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu('shop')
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('men')
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/men">
            Men
          </Link>
          {menu === 'men' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('women')
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/women">
            Women
          </Link>
          {menu === 'women' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids')
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/kids">
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button
            onClick={() => {
              localStorage.removeItem('auth-token')
              window.location.replace('/')
            }}
          >
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button>Sign up</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <img
          className="nav-dropdown"
          onClick={dropdownToggle}
          src={navDropdown}
          alt=""
        />
      </div>
    </div>
  )
}
export default Navbar
