import React, { useState } from 'react';
import { LOGIN, REGISTER } from './constants/auth.constant'
import Login from './Login';
import Register from './Register';
import './assets/styles.scss';

function Auth(props) {
  const [view, setView] = useState(LOGIN)
  // const [view, setView] = useState(REGISTER)

  const handleSwitchLogin = () => {
    setView(LOGIN)
  }

  const handleSwitchRegister = () => {
    setView(REGISTER)
  }

  return (
    <div className='auth-container'>
      <div className='top-block'>
        {props.topBlock}
      </div>

      {
        view === LOGIN ? <Login onSwitchRegister={handleSwitchRegister} /> : null
      }
      {
        view === REGISTER ? <Register onSwitchLogin={handleSwitchLogin} /> : null
      }

    </div>

  )
}

export default Auth;
