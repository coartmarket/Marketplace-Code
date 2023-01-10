import React from 'react';
import Logo from '../../assets/images/brand-logo.png'
import Img from '../shared/Img'
import Icon from '../shared/Icon';
import './assets/styles.scss';

function MainFooter() {
  return (
    <div className='main-footer'>
      <div className='footer-bg' style={{ backgroundImage: "url(/images/main-footer-bg.png)" }} />
      <div className='footer-content'>
        <div className='logo-block'>
          <Img src={Logo} className="logo" />
        </div>
        <div className='meta-block'>
          <div className='section'>
            <Icon icon="linkedin" />
            <Icon icon="facebook" />
            <Icon icon="instagram" />
            <Icon icon="medium" />
            <Icon icon="telegram" />
            <Icon icon="youtube" />
            <Icon icon="twitter" />
            <Icon icon="reddit" />
          </div>
          <div className='section text-center'>
            <span>All rights Reserved</span> | <span>CoArt UAB 2022</span>
          </div>
          <div className='section'>
            <span>Privacy Policy</span> | <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
