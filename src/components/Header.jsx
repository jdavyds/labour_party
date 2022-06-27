import React, { useState } from 'react'
import style from './../styles/header.module.css'
import logo from './../assets/logo.png'
import ham from './../assets/ham.png'
import login from './../assets/login.png'
import store from './../assets/shopping_bag.png'
import cancel from "./../assets/cancel.svg";
import { NavLink } from 'react-router-dom'
export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function handleScroll(e) {
    if (window.scrollY > 130) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  return (
    <header className={sticky ? style.sticky : style.header}>
      <nav className={style.logo}>
        <img src={logo} alt="" />
      </nav>
      <nav className={style.ham} onClick={() => setShowModal(true)}>
        <img src={ham} alt="" />
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
      {showModal && <ResModal setShowModal={setShowModal} />}
    </header>
  );
}

const ResModal = ({ setShowModal }) => {
  return (
    <div className={style.container}>
      <div className={style.modalContainer}>
        <button className={style.cancel} onClick={() => {setShowModal(false)}}>
          <img src={cancel} alt="" />
        </button>
        <nav className={style.modalForm}>
          <span>Become a Member</span>
          <label>
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
        <nav className={style.modalNav}>
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
    </div>
  );
}