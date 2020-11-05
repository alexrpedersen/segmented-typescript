import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import MicrosoftLogin from 'react-microsoft-login';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../redux/actionTypes';

interface AuthProps {
    typeof: {LOGIN},
    name: string,
    picture: string
}

const Auth: React.FC<AuthProps> = () => {
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);

}

const ProcessFacebookLogin: React.FC<AuthProps> = () => {
    return;
}

const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0)
}

if(Auth.isAuthenticated) {
    return (
        <div>
            <img src={Auth.picture} alt={Auth.name} />
            <h2>Welcome {Auth.name}</h2>
        </div>
    );
}

export default Auth;
