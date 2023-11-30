import React from 'react';
import santander from '../../../assets/santander.png';
import incluyeme from '../../../assets/incluyeme.png';
import mindhub from '../../../assets/mindhub.png';
import './Footer.css';
import LoginButton from '../LoginButton/LoginButton';

const Footer = () => {
  return (
    <footer>
      <div className="footer-space">
        <div className="images-footer">
          <a
            title="Página oficial de Banco Santander"
            href="https://www.santander.com.ar/personas"
            target="_blank">
            <img src={santander} width="150" />
          </a>

          <a
            title="Página oficial de Inclúyeme"
            href="https://www.incluyeme.com.ar/"
            target="_blank">
            <img src={incluyeme} width="140" alt="Incluyeme" />
          </a>
          <a
            title="Página oficial de MindHub"
            href="https://mindhubweb.com/"
            target="_blank">
            <img src={mindhub} width="100" alt="MindHub" />
          </a>
        </div>
        <div className="title-footer"></div>
        <div className="login-footer">
          {/* <LoginButton /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
