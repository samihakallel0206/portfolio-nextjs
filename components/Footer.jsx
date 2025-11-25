import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer-container">
        <p>©️{new Date().getFullYear()} Portfoilio:Samiha Kallel</p>
        <div className="icon-social">
          <a href="" aria-label="Twitter" >
            <li className="fa-brands fa-twitter"></li>
          </a>
          <a href="" aria-label="GitHub" >
            <li className="fa-brands fa-github"></li>
          </a>
          <a href="" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer