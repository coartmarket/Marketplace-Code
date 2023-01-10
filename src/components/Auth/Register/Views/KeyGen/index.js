import React, { useState } from 'react';
import Alert from '../../../../shared/Alert';
import Button from '../../../../shared/Button';
import Colors from '../../../../../constants/color.constants';
import QRCode from 'react-qr-code';
import Icon from '../../../../shared/Icon';
import Input from '../../../../shared/Input';
import { IconSize } from '../../../../shared/Icon/constants/icon.constant';
import { FormGroup } from 'reactstrap';
import '../../../assets/styles.scss'

function RegisterKeyGen(props) {
  // const [qrValue, serQrValue] = useState('')
  const [qrValue, serQrValue] = useState('TEST')
  const [qrShow, setQrShow] = useState(false)
  const [publicKey, setPublicKey] = useState('')
  const [privateKey, setPrivateKey] = useState('')

  const handleQrCodeShowToggle = () => {
    setQrShow(!qrShow);
  }
  
  const handleKeyCopy = value => {
    
  }

  const QrBlock = () => {
    return (
      <div className='qr-block'>
        <div className='qr-maze'>
          <div className={`qr-code-wrapper ${qrShow ? '' : 'border-transparent'}`}>
            <QRCode value={qrValue} size={200} />
            {
              qrShow ? null :
                <div className='qr-blur-overlay' />
            }
          </div>
          <div className='qr-reveal-toggle' onClick={handleQrCodeShowToggle}>
            <Icon icon={qrShow ? 'eye' : 'eye-slash'} size={IconSize.MD} />
            <span>
              {qrShow ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>
        <div className='qr-text'>
          <span>
            Your private key is generated. Press view to see your private key. It is important that no one can see or make a copy of your key.
          </span>
        </div>
      </div>
    )
  }

  const GeneratedKeys = () => {
    return (
      <div className='keys-container'>
        <FormGroup className='mb-4'>
          <Input
            id="public-key"
            name="public-key"
            onChange={() => { }}
            value={publicKey}
            label="Public key*"
            appendComponent={
              <Icon icon="copy" color={Colors.name.BRAND_MAIN} onClick={() => handleKeyCopy(publicKey)} />
            }
            labelAppendComponent={
              <Icon icon="info-circle" color={Colors.name.BRAND_MAIN} />
            }
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="private-key"
            name="private-key"
            onChange={() => { }}
            value={privateKey}
            label="Private key*"
            appendComponent={
              <Icon icon="copy" color={Colors.name.BRAND_MAIN} onClick={() => handleKeyCopy(privateKey)} />
            }
            labelAppendComponent={
              <Icon icon="info-circle" color={Colors.name.BRAND_MAIN} />
            }
          />
        </FormGroup>
      </div>
    )
  }

  return (
    <div className='register-view-container key-gen'>
      <div className='view-title'>
        <span>Private Key</span>
      </div>

      <Alert icon="info-circle" color={Colors.name.WARNING_LIGHT} colorText={Colors.name.PINK}>
        Make one or more backup copies of the information provided below. If you lose or forget your private key you will lose access to your assets.
      </Alert>

      <QrBlock />

      <div className='btns-container'>
        <Button onClick={props.onPrint}>Print</Button>
      </div>

      <GeneratedKeys />

    </div>
  )
}

export default RegisterKeyGen;
