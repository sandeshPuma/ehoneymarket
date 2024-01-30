import React from "react";
import './header.css'

import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import {motion} from 'framer-motion';
import logo from '../../assets/images/LogoSIngleYellow.png';
import user_icon from '../../assets/images/user-icon.png';

import Lottie from 'lottie-react';
import bee from '../../assets/images/bee.json'

const nav__links=[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  }
  ]
  

const Header =()=>{
  return <header className="header">
    <Container>
      <Row>
        <div className="nav_wrapper">
          
        <div  style={{ width: '9%', position: 'center', top: '-10', left: '100', right:'50' }}>
           <Lottie animationData={bee}/></div>
          <div className="logo">
            <img src={logo} alt=""/>
            <div>
            
            <p>Since 2001</p>
            </div>
          </div>

          <div className="navigation">
              <ul className='menu'>
                {
                  nav__links.map((item,index)=>(
                    <li className='nav_item' key={index}>
                      <NavLink to={item.path} className={(navClass)=>navClass.isActive?'nav__active':''}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
             </div>

          <div className="nav__icons">
            <span className="fav__icon"><i className="ri-home-heart-line"></i>
            <span className="badge">1</span></span>
            <span className="cart__icon"><i className="ri-shopping-basket-line"></i>
            <span className="badge">1</span></span>

            <span className="user_icon">  <motion.img whileTap={{scale:1.2}} src={user_icon} alt=""/></span>
          </div>

          <div className="mobile__menu">
            <span><i className="ri-menu-5-line"></i></span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
  
};

export default Header;
