import React from 'react';
import Vessel from './vessel';

const ControlPanel: React.FC = props => {
    return(
        <div className = "control-panel">
            <Vessel />
        </div>
    );
};

export default ControlPanel;