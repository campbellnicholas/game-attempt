import React from 'react';
import './Player.scss';

export default function Player(props) {   

    return (
        <div className="root" style={props.gridArea && {gridArea: props.gridArea}}>
            N
        </div>
    )
}