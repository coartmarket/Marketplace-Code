import React from 'react';
import PropTypes from 'prop-types';
import { IconSize } from './constants/icon.constant';
import './assets/styles.scss';

function CoartIcon(props) {
    return (
        <i
            onClick={props.onClick}
            className={`coart-icon la la-${props.icon} ${props.size} ${props.className} ${props.onClick ? 'pointer' : ''} ${props.color ? 'text-' + props.color : ''}`}
        />
    );
}

CoartIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

CoartIcon.defaultProps = {
    size: IconSize.SM,
    onClick: null,
    color: '',
    className: '',
};

export default CoartIcon;
