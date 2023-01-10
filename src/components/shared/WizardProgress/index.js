import React from 'react';
import './assets/styles.scss';

function WizardProgress(props) {
    return (
        <div className='wizard-progress-container'>
            <div className="progress-bar">
                <div
                    id="progress-bar-1"
                    className={`${props.step > 1 ? 'active' : ''}`}
                />
                <div
                    id="progress-bar-2"
                    className={`${props.step > 2 ? 'active' : ''}`}
                />

                <div className="progress-num">
                    {
                        props.steps.map(item => {
                            return (
                                <div key={item.id} className={`step ${item.value === props.step ? 'active' : ''} ${props.step > item.value ? 'completed' : ''}`}>
                                    <div className="step-bubble" />
                                    <span className='step-text'>
                                        {item.title}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default WizardProgress;
