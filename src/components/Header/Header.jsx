import  {  } from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
          {/* <img className='logo' src="./logo.png" alt="Logo" /> */}
          <h2 className='logo'>LOGO</h2>
          <ul className='nav_links'>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Organization</a></li>
            <li><a href="#">Data Import</a></li>
            <li><a href="#">Report Data</a></li>
            <li><a href="#">Notification</a></li>
          </ul>
          <a className='cta' href="#"><button>Sign In</button></a>
        </header>
    )
}
export default Header;