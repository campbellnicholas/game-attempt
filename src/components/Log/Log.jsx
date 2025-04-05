import React from 'react';
import './Log.scss';

export default function Log({ log }) {
    return <textarea disabled={true} className="log" value={log} />
}