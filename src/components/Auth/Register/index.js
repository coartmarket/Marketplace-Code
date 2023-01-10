import React, { useState, useEffect } from 'react';
// import { REGISTER_MAIN, REGISTER_EMAIL_VERIFICATION, REGISTER_KEY_GENERATION } from '../constants/auth.constant'
import RegisterSignup from './Views/Signup';
import WizardProgress from '../../shared/WizardProgress';
import RegisterVerifyEmail from './Views/EmailVerif';
import RegisterKeyGen from './Views/KeyGen';
import '../assets/styles.scss'

const WizardSteps = [
  {
    id: 1,
    title: 'General information',
    // value: REGISTER_MAIN
    value: 1
  },
  {
    id: 2,
    title: 'Email Verification',
    // value: REGISTER_EMAIL_VERIFICATION
    value: 2
  },
  {
    id: 3,
    title: 'Key Generation',
    // value: REGISTER_KEY_GENERATION
    value: 3
  }
]

function Register(props) {
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [termsAgree, setTermsAgree] = useState(false)

  useEffect(() => {

  }, [])

  const handleUsernameChange = e => {
    const value = e.target.value
    setUsername(value)
  }

  const handleEmailChange = e => {
    const value = e.target.value
    setEmail(value)
  }

  const handlePasswordChange = e => {
    const value = e.target.value
    setPassword(value)
  }

  const handlePasswordConfirmChange = e => {
    const value = e.target.value
    setPasswordConfirm(value)
  }

  const handleReCaptchaChange = e => {
    console.log('RECAPTCHA', e)
  }
  
  const handleTermsAgreeChange = () => {
    setTermsAgree(!termsAgree)
  }

  const handleNextStep = value => {
    setStep(value)
  }
  
  const handleResendEmail = () => {
    console.log('RESEND EMAIL')
  }
  
  const handlePrintKey = () => {
    console.log('HANDLE PRINT KEY')
  }

  return (
    <div className='auth-view-container'>
      <WizardProgress steps={WizardSteps} step={step} />

      {
        step === 1 ?
          <RegisterSignup
            onUsernameChange={handleUsernameChange}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onPasswordConfirmChange={handlePasswordConfirmChange}
            onRecaptchaChange={handleReCaptchaChange}
            onNextStep={handleNextStep}
            onTermsAgreeChange={handleTermsAgreeChange}
            username={username}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            termsAgree={termsAgree}
          /> : null
      }

      {
        step === 2 ?
        <RegisterVerifyEmail
          onResendEmail={handleResendEmail}
          email={email}
        /> : null
      }

      {
        step === 3 ?
        <RegisterKeyGen
          onPrint={handlePrintKey}
        /> : null
      }
    </div >

  )
}

export default Register;
