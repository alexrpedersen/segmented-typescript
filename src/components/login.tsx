import React, { useState } from 'react';
import Auth from '../components/auth';
import Modal from 'react-modal';
import { LOGIN } from '../redux/actionTypes';

const customStyles = {
    content : {
        top             : '50%',
        left            : '50%',
        right           : 'auto',
        bottom          : 'auto',
        marginRight     : '-50%',
        tansform        : 'translate(-50%, -50%)',
        width           : '15%',
        height          : '35%',
        borderColor     : 'grey',
        borderWidth     : '8px',
        borderRadius    : '5%'
    }
};

const Logout: React.FC = () => {
    return (
        localStorage.clear();
        window.location.href = "/logout";
    );
};

