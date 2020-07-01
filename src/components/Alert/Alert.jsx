import React, { useState, useEffect } from 'react';
import './Alert.scss';
import cx from 'classnames';

// TODO: Make the alert "toast" properly every time a new alert comes over

export default function Alert(props) {
    return (
        <p className='alert'>{props.message}</p>
    )
}