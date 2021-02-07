import React from 'react';
import {AiFillWarning} from 'react-icons/ai';
import './error-indicator.css';

const ErrorIndicator = () => (
    <div className="error-indicator">
      <AiFillWarning size={60} style={{color: 'red'}}/>
      <h2>Sorry, we had some technical problems. Please try later.</h2>
    </div>
);

export default ErrorIndicator;
