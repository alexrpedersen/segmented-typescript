import React from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_RING } from '../redux/actionTypes';

const Ring: React.FC = props => {
    const dispatch = useDispatch();

    
    const ring = {
        ..props.data
    }

    const UpdateSegments: React.FC = (e) => {
        ring.segment = parseInt(e.target.value);
        dispatchEvent({ type: UPDATE_RING, ring: ring });
    }

    const UpdateOuterDiameter: React.FC = (e) => {
        ring.outDiameter = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    const UpdateWidth: React.FC = (e) => {
        ring.width = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring:ring });
    }

    const UpdateHeight: React.FC = (e) => {
        ring.height = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring:ring });
    }

    const UpdateOffset: React.FC = (e) => {
        ring.offset = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring: ring});
    }

}


