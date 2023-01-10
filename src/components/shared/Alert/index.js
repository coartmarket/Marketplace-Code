import React from 'react';
import { Alert } from 'reactstrap';
import Icon from '../Icon'
import './assets/styles.scss';

function CoartAlert(props) {
    return (
        <Alert className={`coart-alert ${props.color ? 'bg-' + props.color : 'white'}`}>
            {
                props.icon ?
                    <div className='alert-icon'>
                        <Icon icon={props.icon} size={props.iconSize} color={props.colorText} />
                    </div> : null
            }
            <div className={`alert-content ${props.colorText ? 'text-' + props.colorText : ''}`}>
                {props.children}
            </div>
        </Alert>
    );
}

export default CoartAlert;
