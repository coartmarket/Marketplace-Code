import React, { useState } from 'react';
import { Form, FormGroup, Input as Checkbox, Label } from 'reactstrap';
import Button from '../../../../shared/Button';
import GoogleReCaptcha from '../../../../shared/ReCaptcha';
import Input from '../../../../shared/Input'
import CoartIcon from '../../../../shared/Icon';
import '../../../assets/styles.scss'

function RegisterSignup(props) {
  const [passwordInputType, setPasswordInputType] = useState('password')

  const togglePasswordShow = () => {
    setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')
  }

  return (
    <div className='register-view-container sign-up'>
      <div className='view-title'>
        <span>Sign Up</span>
      </div>
      <Form className="auth-form">
        <FormGroup>
          <Input
            id="username"
            name="username"
            onChange={props.onUsernameChange}
            value={props.username}
            isValid={false}
            label="Profile Name*"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="email"
            name="email"
            onChange={props.onEmailChange}
            value={props.email}
            isValid={false}
            label="Email*"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="password"
            name="password"
            type={passwordInputType}
            onChange={props.onPasswordChange}
            value={props.password}
            appendComponent={
              <CoartIcon
                onClick={togglePasswordShow}
                icon={passwordInputType === 'password' ? 'eye' : 'eye-slash'}
              />
            }
            isValid={false}
            label="Password*"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="password-confirm"
            name="password-confirm"
            type={passwordInputType}
            onChange={props.onPasswordConfirmChange}
            value={props.passwordConfirm}
            appendComponent={
              <CoartIcon
                onClick={togglePasswordShow}
                icon={passwordInputType === 'password' ? 'eye' : 'eye-slash'}
              />
            }
            isValid={false}
            label="Re-enter password*"
          />
        </FormGroup>

        <GoogleReCaptcha
          onChange={props.onRecaptchaChange}
        />

        <label className='terms-agree'>
          <Checkbox
            onChange={props.onTermsAgreeChange}
            defaultChecked={props.termsAgree}
            type="checkbox"
            className='terms-agree-checkbox'
          />
          <span className='terms-agree-text'>
            I have read & agree to the Terms and Conditions & Privacy Policy
          </span>
        </label>

        <div className='btns-container'>
          <Button onClick={() => props.onNextStep(2)}>Next</Button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterSignup;
