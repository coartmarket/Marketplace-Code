import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles.scss';

function PreviewImg(props) {
    return (
        <div className={`image-wrapper ${props.wrapperClassName || ''}`}>
            <div className={`cut-edge ${props.position}`} />
            <img className={`image ${props.imageClassName || ''}`} src={props.src} alt={props.alt} />;
        </div>
    )
}

PreviewImg.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};

PreviewImg.defaultProps = {
    alt: 'CoArt',
};

export default PreviewImg;
