import React from 'react';
import './Map.scss';

// TODO: Map landmarks in their own components folder
// TODO: How to change the boundaries for the player given the obstacles in the player's way?

export default function Map(props) {

    return (
        <div className="mapRoot">
            <Tree gridArea="5/8" />
        </div>
    )

}

function Tree(props) {
    return <div className="tree" style={props.gridArea && {gridArea: props.gridArea}}></div>
}