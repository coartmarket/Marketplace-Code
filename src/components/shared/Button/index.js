import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './assets/styles.scss';

function CoartButton(props) {
    return (
        <Button
            id={props.id}
            onClick={props.onClick}
            className={`coart-button ${props.className} ${props.outline ? 'outline' : ''} ${props.transparent ? 'transparent' : ''}`}
        >
            {props.children}
        </Button>
    );
}

CoartButton.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    outline: PropTypes.bool,
    transparent: PropTypes.bool,
};

CoartButton.defaultProps = {
    id: '',
    className: '',
    disabled: false,
    outline: false,
    transparent: false,
};

export default CoartButton;
