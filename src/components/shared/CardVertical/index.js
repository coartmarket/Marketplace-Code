import React from 'react';
import PreviewImg from '../PreviewImg';
import Test from '../../../assets/images/test.jpg'
import Icon from '../Icon'
import { IconSize } from '../Icon/constants/icon.constant';
import Colors from '../../../constants/color.constants';
import './assets/styles.scss';
import Position from '../../../constants/position.constants';

function CardVertical(props) {
  const handleRedirectToCollection = () => {
    console.log('REDIRECT TO COLLECTION')
  }

  return (
    <div className="card-vertical-container">
      <PreviewImg
      src={Test}
      wrapperClassName={`${props.narrowBottom ? 'with-narrow-bottom' : ''}`}
      coverCorner="3"
      position={Position.BOTTOM_LEFT}
      />
      <div className={`bottom-block ${props.narrowBottom ? 'narrow' : ''}`}>
        <div className='info-section'>
          <p className='author-text'>
            {props.data.author}
          </p>
          <p className='title-text'>
            {props.data.title}
          </p>
          <p className='price-text'>
            {props.data.price}
          </p>
        </div>

        <div className='actions-section'>
          <Icon
            onClick={handleRedirectToCollection}
            icon="long-arrow-alt-right"
            size={IconSize.LG}
            color={Colors.name.BRAND_MAIN}
          />
        </div>
      </div>
    </div>
  )
}

export default CardVertical;
