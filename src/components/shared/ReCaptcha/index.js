import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './assets/styles.scss';

const RECAPTCHA_KEY = 'asdasdasdassdasd'

function GoogleReCaptcha(props) {
  return (
    <div className='google-recaptcha-wrapper'>
      <ReCAPTCHA
        sitekey={RECAPTCHA_KEY}
        onChange={props.onChange}
      />
    </div>

  );
}

export default GoogleReCaptcha;
