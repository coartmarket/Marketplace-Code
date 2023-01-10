import React, { useState } from 'react';
import Auth from '../Auth'
import Logo from '../../assets/images/brand-logo.png'
import CoartSlidingPanel from '../../components/CoartSlidingPanel'
import Img from '../shared/Img'
import Button from '../shared/Button'
import './assets/styles.scss';

function MainHeader() {
  const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false)

  const toggleLoginPanel = () => {
    setIsLoginPanelOpen(!isLoginPanelOpen)
  }

  const handlePanelClose = () => {
    setIsLoginPanelOpen(false)
  }

  const ActionButtons = () => {
    return (
      <div className='navbar-block action-buttons'>
        <Button transparent={true}>
          F.A.Q
        </Button>
        <Button onClick={toggleLoginPanel}>
          Sign In
        </Button>
      </div>
    )
  }

  const NavBar = () => {
    return (
      <div className='navbar'>
        <div className='navbar-block'>
          <Img src={Logo} className="logo" />
        </div>
        <ActionButtons />
      </div>
    )
  }

  const Titles = () => {
    return (
      <div className='titles'>
        <div className='main-title'>
          <span>Artists`</span><br />
          <span>collections</span>
        </div>
        <div className='subtitle'>
          <span>
            Discover hundreds of truly unique and inspiring artists and their work
          </span>
        </div>
      </div>
    )
  }


  return (
    <div className="main-header">
      <div className='header-bg' style={{ backgroundImage: "url(/images/main-header-bg.png)" }} />
      <NavBar />
      <Titles />

      <CoartSlidingPanel
        type="right"
        isOpen={isLoginPanelOpen}
        // isOpen={true}
        onPanelClose={handlePanelClose}
        size={50}
        onClosePanel={handlePanelClose}
      >
        <Auth
          topBlock={
            <ActionButtons />
          }
        />
      </CoartSlidingPanel>
    </div>
  )
}

export default MainHeader;
