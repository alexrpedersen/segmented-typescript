import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_RING } from '../redux/actionTypes';
import Ring from './ring';

const Vessel: React.FC = () => {
    
    const dispatch = useDispatch();
    
    const rings = useSelector(state => state.vessel.rings);


}

const AddRing: React.FC = () => {
    let ring = {
        id: Object.keys(rings).length,
        segments: 10,
        height: 2,
        width: 2,
        outerDiameter: 10
    }

    dispatch({ type: ADD_RING, ring: ring });

}