import React from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import './assets/styles.scss';

function CoartSlidingPanel(props) {
  return (
    <div className='coart-sliding-panel-wrapper'>
      <SlidingPanel
        type={props.type}
        isOpen={props.isOpen}
        size={props.size}
        panelContainerClassName="coart-panel-container"
        panelClassName="coart-panel"
        backdropClicked={props.onClosePanel}
      >
        <div className='coart-sliding-panel-content'>
          {props.children}
        </div>
      </SlidingPanel>
    </div>

  )
}

export default CoartSlidingPanel;
