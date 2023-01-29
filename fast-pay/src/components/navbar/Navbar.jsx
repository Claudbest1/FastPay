import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../../data'
import { MdOutlineClose } from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'
import './navbar.css'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
      <nav>
        <div className="container nav__container">
            <div>
                <Link to="/" className='logo'>
                  <h1>FastPay</h1>
                </Link>
            </div>
          <div>
              <ul className={`nav__links ${isNavShowing ? 'show__nav': 'hide__nav'}`}>
                  {links.map(({ name, path }, index) => {
                      return (
                          <li key={index}>
                              <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ' '} onClick={()=> setIsNavShowing (prev => !prev)}>{name}</NavLink>
                          </li>
                      )
                  })}
                     <div className="nav__btn">
              <button className='nav__btns-login'>Login</button>
                  <button className='nav__btns-createAccnt'>Create Free Account</button></div>  
              </ul>
          </div>
         
                  <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>{
                      isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                  }</button>
              
        </div>
    </nav>
  )
}

export default Navbar