import React,{ useEffect, useRef } from 'react'
import Logo from '../../assets/img/logo.png'
import $ from "jquery";
window.jQuery = $
require("jquery-nice-select");

export default function Navbar() {
    useEffect(() => {
        $(".nav-link").click(function () {
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
          });
          $("select").niceSelect();
      }, []);
   
  return (
    <>
      {/* <!-- Main-menu Strat --> */}
    <div className="mein-menu">
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={Logo} className="logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{position:'sticky', top:'100px'}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#transfer">Transfer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#howitworks">How it Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#help">Help</a>
                        </li>
                        <li className="nav-item">
                            <div className="language-select">
                                <select className="select-bar">
                                    <option value="">EN</option>
                                    <option value="">IN</option>
                                    <option value="">BN</option>
                                </select>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link button-1" href="#">Start Now !</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    {/* <!-- Main-menu End --> */}
    </>
  )
}
