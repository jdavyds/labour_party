import React from 'react'
import style from './../styles/header.module.css'
import logo from './../assets/logo.png'
import login from './../assets/login.png'
import store from './../assets/shopping_bag.png'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.logo}>
        <img src={logo} alt="" />
      </nav>
      <div className={style.navRight}>
        <nav className={style.navTop}>
          <label>
            <span>Become a Member</span>
            <input type="text" placeholder="Email or Phone Number" />
            <button>Sign Up</button>
          </label>
          <nav>
            <button>
              Store <img src={store} alt="" />
            </button>
            <button>
              Login <img src={login} alt="" />
            </button>
          </nav>
        </nav>
        <nav className={style.navBtm}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/party">THE PARTY</NavLink>
          <NavLink to="/issues">THE ISSUES</NavLink>
          <NavLink to="/women">LP WOMEN</NavLink>
          <NavLink to="/club">LP CLUB</NavLink>
          <NavLink to="/community">COMMUNITY</NavLink>
          <NavLink to="/membership">MEMBERSHIP</NavLink>
          <NavLink to="/jobs">JOBS</NavLink>
          <NavLink to="/get-involved">GET INVOLVED</NavLink>
        </nav>
      </div>
    </header>
  );
}
