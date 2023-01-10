import React from 'react';
import Button from '../../../../shared/Button';
import '../../../assets/styles.scss'

function RegisterVerifyEmail(props) {
  return (
    <div className='register-view-container verif-email'>
      <div className='view-title'>
        <span>Verify your email</span>
      </div>

      <div className='view-subtitle'>
        <span>
          {
            `We sent an email to: ${props.email}. Just click on the link in that email to complete your sign up.`
          }
        </span>
      </div>

      <div className='btns-container'>
        <div className='view-subtitle mb-3'>
          <span>
            Still can't find our email?
          </span>
        </div>
        <Button onClick={props.onResendEmail}>Resend Email</Button>
      </div>
    </div>
  )
}

export default RegisterVerifyEmail;
