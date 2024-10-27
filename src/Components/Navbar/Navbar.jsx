import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
      

const Navbar = () => {
    
    const[menu,setMenu] = useState("shop");
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><link to='/'>Shop</link> {menu==="shop"?<hr/>:<> </>}</li>
        <li onClick={()=>{setMenu("men")}}><link to='/men'>Men</link>Men{menu==="men"?<hr/>:<> </>}</li>
        <li onClick={()=>{setMenu("women")}}><link to='/women'>Women</link>{menu==="women"?<hr/>:<> </>}</li>
        <li onClick={()=>{setMenu("kids")}}><link to='kids'>Kids</link>Kids{menu==="kids"?<hr/>:<> </>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <link to='/Cart'><img src={cart_icon} alt="" /></link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
