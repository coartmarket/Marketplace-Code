import React, { useState } from 'react';
import { Form, FormGroup, Input as Checkbox } from 'reactstrap';
import Input from '../../shared/Input'
import Button from '../../shared/Button'
import '../assets/styles.scss'
import GoogleReCaptcha from '../../shared/ReCaptcha';

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleUsernameChange = e => {
    const value = e.target.value
    setUsername(value)
  }

  const handlePasswordChange = e => {
    const value = e.target.value
    setPassword(value)
  }

  const toggleRememberMeValue = e => {
    setRememberMe(!rememberMe)
  }

  const handleReCaptchaChange = e => {
    console.log('RECAPTCHA', e)
  }

  console.log('REMEMBER ME', rememberMe)

  return (
    <div className='auth-view-container'>
      <div className='view-title'>
        <span>Log In</span>
      </div>

      <Form className="auth-form">
        <FormGroup className='mb-4'>
          <Input
            id="email"
            name="email"
            placeholder="Your username"
            onChange={handleUsernameChange}
            value={username}
            label="Name*"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            label="Password*"
            helperBlock={
              <div className='login-password-addons'>
                <label className='remember-me'>
                  <Checkbox
                    onChange={toggleRememberMeValue}
                    defaultChecked={rememberMe}
                    type="checkbox"
                    className='remember-me-checkbox'
                  />
                  <span className='remember-me-text'>Remember me</span>
                </label>
                <div className='link-text forgot-password'>
                  Forgot password?
                </div>
              </div>
            }
          />
        </FormGroup>

        <GoogleReCaptcha
          onChange={handleReCaptchaChange}
        />

        <div className='btns-container'>
          <Button>Log In</Button>
          <Button
            onClick={props.onSwitchRegister}
            outline={true}
          >
            Create an account
          </Button>
        </div>
      </Form>
    </div>

  )
}

export default Login;
