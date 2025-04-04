import React from 'react';
import './Alert.scss';
import cx from 'classnames';

const ALERT_TYPES = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
};

export default function Alert({ message, type = ALERT_TYPES.INFO }) {
    return (
        <dialog 
            key={`${type}-${Date.now()}`} 
            className={cx('alert', `alert--${type}`)}
        >
            {message}
        </dialog>
    )
}

Alert.TYPES = ALERT_TYPES;