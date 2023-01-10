import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import './assets/styles.scss';

function CoartInput(props) {
    const [inputFocus, setInputFocus] = useState(false)

    const handleInputFocus = value => {
        setInputFocus(value)
    }
    return (
        <div className='coart-input-container'>
            {
                props.label ?
                    <div className='label-container'>
                        <Label for={props.name} className="coart-input-label">{props.label}</Label>
                        <div className='label-append-component'>
                            {props.labelAppendComponent}
                        </div>
                    </div> : null
            }
            <div className={`input-content-container ${inputFocus ? 'focused' : ''}`}>
                <Input
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    className={`coart-input ${props.prependComponent ? 'with-prepend' : ''}`}
                    type={props.type}
                    onFocus={() => handleInputFocus(true)}
                    onBlur={() => handleInputFocus(false)}
                />
                {
                    props.appendComponent ?
                        <div className={`input-append`}>
                            {props.appendComponent}
                        </div> : null
                }
            </div>
            {props.helperBlock}
        </div>
    );
}

CoartInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    appendText: PropTypes.string,
    appendIcon: PropTypes.string,
    prependText: PropTypes.string,
    prependIcon: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onClickAppend: PropTypes.func,
    onClickPrepend: PropTypes.func,
    disabled: PropTypes.bool,
    valid: PropTypes.bool,
    invalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    error: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md']),
    isFocused: PropTypes.bool,
    labelAction: PropTypes.elementType,
    appendComponent: PropTypes.elementType,
    appendComponent2: PropTypes.elementType,
    fontSize: PropTypes.oneOf(['xs', 'sm', 'ssm']),
    isStatic: PropTypes.bool,
    clear: PropTypes.bool,
};

CoartInput.defaultProps = {
    id: '',
    type: 'text',
    name: '',
    className: '',
    placeholder: '',
    autoComplete: '',
    appendText: '',
    appendIcon: '',
    prependText: '',
    prependIcon: '',
    onClickAppend: null,
    onClickPrepend: null,
    onBlur: null,
    onFocus: null,
    disabled: false,
    min: '',
    max: '',
    valid: true,
    invalid: false,
    error: '',
    size: 'md',
    isFocused: false,
    labelAction: null,
    appendComponent: null,
    fontSize: 'sm',
    isStatic: false,
    wrapperClass: '',
    clear: false,
};

export default CoartInput;
