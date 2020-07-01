import React from 'react';
import './Map.scss';
import cx from 'classnames';

// TODO: Map landmarks in their own components folder
// TODO: Make placing the objects on the map more declarative

export default function Map(props) {
    return (
        <div className={cx('mapRoot', props.season)} style={props.background && {background: props.background}}>
            {props?.obstacles?.tree?.map(gridArea => <Tree key={`tree-${gridArea}`} gridArea={gridArea} />)}
            {props?.obstacles?.rock?.map(gridArea => <Rock key={`rock-${gridArea}`} gridArea={gridArea} />)}
            {props?.flourishes?.crabgrass?.map(gridArea => <Crabgrass key={`crabgrass-${gridArea}`} gridArea={gridArea} />)}
            {props?.passages?.map(passage => <Passage key={`passage-${passage}`} gridArea={passage.position} className={cx('passage', passage.type)} />)}
        </div>
    )

}

function Passage(props) {
    return <div className={props.className} style={props.gridArea && {gridArea: props.gridArea}} />
}

function Tree(props) {
    return (
        <div className="tree" style={props.gridArea && {gridArea: props.gridArea}}>
            <svg id="ed7339b4-9396-4731-92b4-bec546d32b59" data-name="tree export" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752.9 752.9">
                <path d="M564.7 235.3h47v47.06h-47z"/>
                <path className="trunk" d="M329.4 611.8h47.1v47.06h-47.1zM470.6 658.8h47.1v47.06h-47.1zM423.5 658.8h47.1v47.06h-47.1z"/>
                <path className="trunk" d="M376.5 658.8h47.1v47.06h-47.1zM329.4 658.8h47.1v47.06h-47.1z"/>
                <path className="trunk" d="M282.3 658.8h47.1v47.06h-47.1z"/>
                <path className="trunk" d="M235.3 658.8h47.1v47.06h-47.1z"/>
                <path className="trunk" d="M235.3 611.8h47.1v47.06h-47.1z"/>
                <path d="M188.2 658.8h47v47.06h-47zM564.7 705.9h47v47.06h-47zM611.8 705.9h47.1v47.06h-47.1z"/>
                <path d="M658.8 705.9h47.1v47.06h-47.1zM517.7 705.9h47.1v47.06h-47.1zM470.6 705.9h47.1v47.06h-47.1zM423.5 705.9h47.1v47.06h-47.1zM141.2 705.9h47.1v47.06h-47.1z"/>
                <path d="M188.2 705.9h47v47.06h-47zM282.3 705.9h47.1v47.06h-47.1z"/>
                <path d="M235.3 705.9h47.1v47.06h-47.1zM329.4 705.9h47.1v47.06h-47.1zM376.5 705.9h47.1v47.06h-47.1zM517.7 658.8h47.1v47.06h-47.1z"/>
                <path d="M564.7 658.8h47v47.06h-47zM658.8 658.8h47.1v47.06h-47.1z"/>
                <path d="M611.8 658.8h47.1v47.06h-47.1zM705.9 658.8H753v47.06h-47.1zM470.6 611.8h47.1v47.06h-47.1zM423.5 611.8h47.1v47.06h-47.1z"/>
                <path d="M376.5 611.8h47.1v47.06h-47.1zM611.8 564.7h47.1v47.06h-47.1zM564.7 564.7h47v47.06h-47z"/>
                <path d="M517.7 564.7h47.1v47.06h-47.1zM470.6 564.7h47.1v47.06h-47.1zM423.5 564.7h47.1v47.06h-47.1z"/><path d="M376.5 564.7h47.1v47.06h-47.1zM658.8 517.6h47.1v47.05h-47.1z"/>
                <path d="M611.8 517.6h47.1v47.05h-47.1zM517.7 517.6h47.1v47.05h-47.1z"/>
                <path d="M658.8 470.6h47.1v47.06h-47.1z"/>
                <path d="M611.8 470.6h47.1v47.06h-47.1zM564.7 470.6h47v47.06h-47z"/>
                <path d="M517.7 470.6h47.1v47.06h-47.1zM470.6 470.6h47.1v47.06h-47.1zM658.8 423.5h47.1v47.06h-47.1z"/>
                <path d="M611.8 423.5h47.1v47.06h-47.1zM564.7 423.5h47v47.06h-47zM705.9 376.5H753v47.06h-47.1z"/>
                <path d="M611.8 376.5h47.1v47.06h-47.1zM564.7 376.5h47v47.06h-47zM705.9 329.4H753v47.06h-47.1zM658.8 329.4h47.1v47.06h-47.1z"/>
                <path d="M611.8 329.4h47.1v47.06h-47.1zM564.7 329.4h47v47.06h-47zM705.9 282.3H753v47.06h-47.1zM658.8 282.3h47.1v47.06h-47.1z"/>
                <path d="M611.8 282.3h47.1v47.06h-47.1zM564.7 282.3h47v47.06h-47z"/>
                <path d="M517.7 282.3h47.1v47.06h-47.1z"/>
                <path d="M517.7 235.3h47.1v47.06h-47.1zM517.7 188.2h47.1v47.06h-47.1zM658.8 235.3h47.1v47.06h-47.1z"/>
                <path d="M611.8 235.3h47.1v47.06h-47.1zM705.9 188.2H753v47.06h-47.1zM658.8 188.2h47.1v47.06h-47.1z"/>
                <path d="M611.8 188.2h47.1v47.06h-47.1z"/>
                <path d="M658.8 141.2h47.1v47.05h-47.1z"/>
                <path d="M611.8 141.2h47.1v47.05h-47.1zM564.7 141.2h47v47.05h-47zM658.8 94.1h47.1v47.06h-47.1zM564.7 94.1h47v47.06h-47z"/>
                <path d="M517.7 94.1h47.1v47.06h-47.1zM611.8 47.1h47.1v47.06h-47.1z"/>
                <path d="M564.7 47.1h47v47.06h-47z"/>
                <path d="M517.7 47.1h47.1v47.06h-47.1zM470.6 47.1h47.1v47.06h-47.1zM470.6 0h47.1v47.06h-47.1zM423.5 0h47.1v47.06h-47.1z"/>
                <path d="M376.5 0h47.1v47.06h-47.1zM329.4 0h47.1v47.06h-47.1zM423.5 376.5h47.1v47.06h-47.1zM329.4 188.2h47.1v47.06h-47.1zM188.2 94.1h47v47.06h-47zM94.1 282.3h47.1v47.06H94.1zM188.2 423.5h47v47.06h-47zM94.1 517.6h47.1v47.05H94.1z"/>
                <path className="leaves" d="M282.3 611.8h47.1v47.06h-47.1zM235.3 564.7h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 564.7h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M329.4 564.7h47.1v47.06h-47.1zM470.6 517.6h47.1v47.05h-47.1zM235.3 517.6h47.1v47.05h-47.1zM329.4 517.6h47.1v47.05h-47.1z"/>
                <path className="leaves" d="M282.3 517.6h47.1v47.05h-47.1zM376.5 517.6h47.1v47.05h-47.1z"/>
                <path className="leaves" d="M423.5 517.6h47.1v47.05h-47.1zM235.3 470.6h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 470.6h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M329.4 470.6h47.1v47.06h-47.1zM376.5 470.6h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 470.6h47.1v47.06h-47.1zM517.7 423.5h47.1v47.06h-47.1zM470.6 423.5h47.1v47.06h-47.1zM235.3 423.5h47.1v47.06h-47.1zM329.4 423.5h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 423.5h47.1v47.06h-47.1zM376.5 423.5h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 423.5h47.1v47.06h-47.1zM141.2 423.5h47.1v47.06h-47.1zM517.7 376.5h47.1v47.06h-47.1zM470.6 376.5h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M141.2 376.5h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M188.2 376.5h47v47.06h-47zM235.3 376.5h47.1v47.06h-47.1zM329.4 376.5h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 376.5h47.1v47.06h-47.1zM376.5 376.5h47.1v47.06h-47.1zM470.6 329.4h47.1v47.06h-47.1zM517.7 329.4h47.1v47.06h-47.1zM188.2 329.4h47v47.06h-47zM235.3 329.4h47.1v47.06h-47.1zM329.4 329.4h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 329.4h47.1v47.06h-47.1zM376.5 329.4h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 329.4h47.1v47.06h-47.1zM470.6 282.3h47.1v47.06h-47.1zM188.2 282.3h47v47.06h-47zM235.3 282.3h47.1v47.06h-47.1zM329.4 282.3h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 282.3h47.1v47.06h-47.1zM376.5 282.3h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 282.3h47.1v47.06h-47.1zM564.7 517.6h47v47.05h-47zM658.8 376.5h47.1v47.06h-47.1zM611.8 94.1h47.1v47.06h-47.1zM470.6 94.1h47.1v47.06h-47.1zM329.4 94.1h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 94.1h47.1v47.06h-47.1zM376.5 94.1h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 94.1h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 47.1h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M376.5 47.1h47.1v47.06h-47.1zM329.4 47.1h47.1v47.06h-47.1zM282.3 0h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 47.1h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M235.3 47.1h47.1v47.06h-47.1zM188.2 47.1h47v47.06h-47zM188.2 0h47v47.06h-47z"/>
                <path className="leaves" d="M235.3 94.1h47.1v47.06h-47.1zM141.2 94.1h47.1v47.06h-47.1zM94.1 94.1h47.1v47.06H94.1z"/>
                <path className="leaves" d="M94.1 47.1h47.1v47.06H94.1zM564.7 188.2h47v47.06h-47z"/>
                <path className="leaves" d="M517.7 141.2h47.1v47.05h-47.1zM470.6 141.2h47.1v47.05h-47.1zM94.1 141.2h47.1v47.05H94.1z"/>
                <path className="leaves" d="M47.1 141.2h47.1v47.05H47.1zM141.2 141.2h47.1v47.05h-47.1z"/>
                <path className="leaves" d="M188.2 141.2h47v47.05h-47zM235.3 141.2h47.1v47.05h-47.1z"/>
                <path className="leaves" d="M282.3 141.2h47.1v47.05h-47.1z"/>
                <path className="leaves" d="M329.4 141.2h47.1v47.05h-47.1zM376.5 141.2h47.1v47.05h-47.1z"/>
                <path className="leaves" d="M423.5 141.2h47.1v47.05h-47.1zM470.6 188.2h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M376.5 188.2h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 188.2h47.1v47.06h-47.1zM470.6 235.3h47.1v47.06h-47.1zM329.4 235.3h47.1v47.06h-47.1zM376.5 235.3h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M423.5 235.3h47.1v47.06h-47.1zM188.2 235.3h47v47.06h-47zM235.3 235.3h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 235.3h47.1v47.06h-47.1zM47.1 188.2h47.1v47.06H47.1zM141.2 188.2h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M94.1 188.2h47.1v47.06H94.1zM188.2 188.2h47v47.06h-47zM235.3 188.2h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M282.3 188.2h47.1v47.06h-47.1zM94.1 235.3h47.1v47.06H94.1zM0 235.3h47.1v47.06H0z"/>
                <path className="leaves" d="M47.1 235.3h47.1v47.06H47.1zM141.2 235.3h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M141.2 282.3h47.1v47.06h-47.1zM141.2 329.4h47.1v47.06h-47.1zM94.1 329.4h47.1v47.06H94.1zM94.1 376.5h47.1v47.06H94.1z"/>
                <path className="leaves" d="M94.1 423.5h47.1v47.06H94.1zM94.1 470.6h47.1v47.06H94.1zM141.2 470.6h47.1v47.06h-47.1z"/>
                <path className="leaves" d="M141.2 517.6h47.1v47.05h-47.1z"/>
                <path className="leaves" d="M188.2 517.6h47v47.05h-47z"/>
                <path className="leaves" d="M188.2 470.6h47v47.06h-47zM188.2 564.7h47v47.06h-47zM188.2 611.8h47v47.06h-47z"/>
                <path className="leaves" d="M141.2 611.8h47.1v47.06h-47.1zM141.2 564.7h47.1v47.06h-47.1zM94.1 564.7h47.1v47.06H94.1z"/>
                <path className="leaves" d="M47.1 564.7h47.1v47.06H47.1zM47.1 470.6h47.1v47.06H47.1z"/>
                <path className="leaves" d="M47.1 517.6h47.1v47.05H47.1zM0 517.6h47.1v47.05H0z"/>
                <path className="leaves" d="M0 470.6h47.1v47.06H0zM0 423.5h47.1v47.06H0zM47.1 423.5h47.1v47.06H47.1z"/>
                <path className="leaves" d="M47.1 376.5h47.1v47.06H47.1zM47.1 329.4h47.1v47.06H47.1zM47.1 282.3h47.1v47.06H47.1zM0 329.4h47.1v47.06H0zM0 282.3h47.1v47.06H0z"/>
            </svg>
        </div>
    )
}

function Rock(props) {
    return (
        <div className="rock" style={props.gridArea && {gridArea: props.gridArea}}>
            <svg id="aecc40d4-7fc7-40b4-b910-00f023b97003" data-name="rock export" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 658.8">
                <path d="M752.9 611.8H800v47.06h-47.1zM705.9 611.8h47v47.06h-47zM705.9 564.7h47v47.06h-47zM658.8 611.8h47.1v47.06h-47.1zM658.8 564.7h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M658.8 470.6h47.1v47.06h-47.1zM658.8 423.5h47.1v47.05h-47.1z"/>
                <path className="mainrock" d="M658.8 376.5h47.1v47.06h-47.1zM658.8 329.4h47.1v47.06h-47.1z"/>
                <path d="M611.8 611.8h47.1v47.06h-47.1zM611.8 564.7h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M611.8 517.6h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M611.8 470.6h47.1v47.06h-47.1zM611.8 423.5h47.1v47.05h-47.1z"/>
                <path className="mainrock" d="M611.8 376.5h47.1v47.06h-47.1zM611.8 329.4h47.1v47.06h-47.1zM611.8 282.3h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M611.8 235.3h47.1v47.06h-47.1z"/>
                <path d="M564.7 611.8h47.1v47.06h-47.1zM564.7 564.7h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M564.7 517.6h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M564.7 470.6h47.1v47.06h-47.1zM564.7 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M564.7 376.5h47.1v47.06h-47.1zM564.7 329.4h47.1v47.06h-47.1zM564.7 282.3h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M564.7 235.3h47.1v47.06h-47.1zM564.7 188.2h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M564.7 141.2h47.1v47.06h-47.1zM564.7 94.1h47.1v47.06h-47.1z"/>
                <path d="M517.6 611.8h47.1v47.06h-47.1zM517.6 564.7h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M517.6 517.6h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M517.6 470.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M517.6 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M517.6 376.5h47.1v47.06h-47.1zM517.6 329.4h47.1v47.06h-47.1zM517.6 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M517.6 235.3h47.1v47.06h-47.1zM517.6 188.2h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M517.6 141.2h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M517.6 94.1h47.1v47.06h-47.1zM517.6 47h47.1v47.06h-47.1z"/>
                <path d="M470.6 611.8h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M470.6 564.7h47.1v47.06h-47.1zM470.6 517.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M470.6 470.6h47.1v47.06h-47.1zM470.6 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M470.6 376.5h47.1v47.06h-47.1zM470.6 329.4h47.1v47.06h-47.1zM470.6 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M470.6 235.3h47.1v47.06h-47.1zM470.6 188.2h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M470.6 141.2h47.1v47.06h-47.1zM470.6 94.1h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M470.6 47h47.1v47.06h-47.1z"/><path d="M423.5 611.8h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M423.5 564.7h47.1v47.06h-47.1zM423.5 517.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M423.5 470.6h47.1v47.06h-47.1zM423.5 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M423.5 376.5h47.1v47.06h-47.1zM423.5 329.4h47.1v47.06h-47.1zM423.5 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M423.5 235.3h47.1v47.06h-47.1zM423.5 188.2h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M423.5 141.2h47.1v47.06h-47.1zM423.5 94.1h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M423.5 47h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M423.5 0h47.1v47.05h-47.1z"/>
                <path d="M376.5 611.8h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M376.5 564.7h47.1v47.06h-47.1zM376.5 517.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M376.5 470.6h47.1v47.06h-47.1zM376.5 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M376.5 376.5h47.1v47.06h-47.1zM376.5 329.4h47.1v47.06h-47.1zM376.5 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M376.5 235.3h47.1v47.06h-47.1zM376.5 188.2h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M376.5 141.2h47.1v47.06h-47.1zM376.5 94.1h47.1v47.06h-47.1zM376.5 47h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M376.5 0h47.1v47.05h-47.1z"/>
                <path d="M329.4 611.8h47v47.06h-47z"/>
                <path className="shadowrock" d="M329.4 564.7h47v47.06h-47z"/>
                <path className="mainrock" d="M329.4 517.6h47v47.06h-47z"/>
                <path className="lightrock" d="M329.4 470.6h47v47.06h-47zM329.4 423.5h47v47.05h-47z"/>
                <path className="lightrock" d="M329.4 376.5h47v47.06h-47zM329.4 329.4h47v47.06h-47zM329.4 282.3h47v47.06h-47z"/>
                <path className="lightrock" d="M329.4 235.3h47v47.06h-47zM329.4 188.2h47v47.06h-47z"/>
                <path className="lightrock" d="M329.4 141.2h47v47.06h-47zM329.4 94.1h47v47.06h-47z"/>
                <path className="mainrock" d="M329.4 47h47v47.06h-47z"/>
                <path className="mainrock" d="M329.4 0h47v47.05h-47z"/>
                <path d="M282.4 611.8h47.1v47.06h-47.1z"/>
                <path className="shadowrock" d="M282.4 564.7h47.1v47.06h-47.1zM282.4 517.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M282.4 470.6h47.1v47.06h-47.1zM282.4 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M282.4 376.5h47.1v47.06h-47.1zM282.4 329.4h47.1v47.06h-47.1zM282.4 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M282.4 235.3h47.1v47.06h-47.1zM282.4 188.2h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M282.4 141.2h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M282.4 94.1h47.1v47.06h-47.1zM282.4 47h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M282.4 0h47.1v47.05h-47.1z"/>
                <path d="M235.3 611.8h47.1v47.06h-47.1z"/>
                <path className="shadowrock" d="M235.3 564.7h47.1v47.06h-47.1zM235.3 517.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M235.3 470.6h47.1v47.06h-47.1zM235.3 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M235.3 376.5h47.1v47.06h-47.1zM235.3 329.4h47.1v47.06h-47.1zM235.3 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M235.3 235.3h47.1v47.06h-47.1zM235.3 188.2h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M235.3 141.2h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M235.3 94.1h47.1v47.06h-47.1zM235.3 47h47.1v47.06h-47.1z"/>
                <path d="M188.2 611.8h47.1v47.06h-47.1z"/>
                <path className="shadowrock" d="M188.2 564.7h47.1v47.06h-47.1zM188.2 517.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M188.2 470.6h47.1v47.06h-47.1zM188.2 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M188.2 376.5h47.1v47.06h-47.1zM188.2 329.4h47.1v47.06h-47.1zM188.2 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M188.2 235.3h47.1v47.06h-47.1zM188.2 188.2h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M188.2 141.2h47.1v47.06h-47.1zM188.2 94.1h47.1v47.06h-47.1z"/>
                <path d="M141.2 611.8h47.1v47.06h-47.1zM141.2 564.7h47.1v47.06h-47.1z"/>
                <path className="shadowrock" d="M141.2 517.6h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M141.2 470.6h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M141.2 423.5h47.1v47.05h-47.1z"/>
                <path className="lightrock" d="M141.2 376.5h47.1v47.06h-47.1zM141.2 329.4h47.1v47.06h-47.1zM141.2 282.3h47.1v47.06h-47.1z"/>
                <path className="lightrock" d="M141.2 235.3h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M141.2 188.2h47.1v47.06h-47.1z"/>
                <path className="mainrock" d="M141.2 141.2h47.1v47.06h-47.1z"/>
                <path d="M94.1 611.8h47.1v47.06H94.1zM94.1 564.7h47.1v47.06H94.1z"/>
                <path className="mainrock" d="M94.1 517.6h47.1v47.06H94.1z"/>
                <path className="mainrock" d="M94.1 470.6h47.1v47.06H94.1z"/>
                <path className="lightrock" d="M94.1 423.5h47.1v47.05H94.1z"/>
                <path className="lightrock" d="M94.1 376.5h47.1v47.06H94.1zM94.1 329.4h47.1v47.06H94.1z"/>
                <path className="mainrock" d="M94.1 282.3h47.1v47.06H94.1z"/>
                <path className="mainrock" d="M94.1 235.3h47.1v47.06H94.1zM94.1 188.2h47.1v47.06H94.1z"/>
                <path d="M47.1 564.7h47.1v47.06H47.1zM47.1 517.6h47.1v47.06H47.1z"/>
                <path className="mainrock" d="M47.1 470.6h47.1v47.06H47.1zM47.1 423.5h47.1v47.05H47.1z"/>
                <path className="mainrock" d="M47.1 376.5h47.1v47.06H47.1zM47.1 329.4h47.1v47.06H47.1zM47.1 282.3h47.1v47.06H47.1z"/>
                <path className="mainrock" d="M47.1 235.3h47.1v47.06H47.1z"/>
                <path d="M0 517.6h47.1v47.06H0z"/>
                <path className="mainrock" d="M0 470.6h47.1v47.06H0zM0 423.5h47.1v47.05H0z"/>
                <path className="mainrock" d="M0 376.5h47.1v47.06H0zM0 329.4h47.1v47.06H0zM0 282.3h47.1v47.06H0z"/>
            </svg>
        </div>
    )
}

function Crabgrass(props) {
    return (
        <div className="crabgrass" style={props.gridArea && {gridArea: props.gridArea}}>
            <svg id="bbc6a584-3665-4e05-a91a-7acc860aa706" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 564.7">
                <path d="M752.9 470.6h47v47.06h-47zM705.9 423.5H753v47.06h-47.1z"/>
                <path d="M705.9 376.5H753v47.05h-47.1zM705.9 235.3H753v47.06h-47.1zM658.8 376.5h47.1v47.05h-47.1zM658.8 329.4h47.1v47.06h-47.1zM658.8 188.2h47.1v47.06h-47.1z"/>
                <path d="M611.8 376.5h47.1v47.05h-47.1zM611.8 329.4h47.1v47.06h-47.1z"/>
                <path d="M611.8 282.4h47.1v47.06h-47.1zM611.8 188.2h47.1v47.06h-47.1z"/>
                <path d="M611.8 141.2h47.1v47.06h-47.1zM564.7 423.5h47.1v47.06h-47.1z"/>
                <path d="M564.7 376.5h47.1v47.05h-47.1zM564.7 235.3h47.1v47.06h-47.1zM564.7 188.2h47.1v47.06h-47.1z"/>
                <path d="M564.7 141.2h47.1v47.06h-47.1zM517.6 517.6h47.1v47.06h-47.1z"/>
                <path d="M517.6 470.6h47.1v47.06h-47.1zM517.6 423.5h47.1v47.06h-47.1zM517.6 282.4h47.1v47.06h-47.1zM517.6 235.3h47.1v47.06h-47.1z"/>
                <path d="M470.6 517.6h47.1v47.06h-47.1z"/>
                <path d="M470.6 470.6h47.1v47.06h-47.1zM470.6 376.5h47.1v47.05h-47.1zM470.6 329.4h47.1v47.06h-47.1z"/>
                <path d="M470.6 282.4h47.1v47.06h-47.1zM470.6 141.2h47.1v47.06h-47.1zM423.5 517.6h47.1v47.06h-47.1z"/>
                <path d="M423.5 470.6h47.1v47.06h-47.1zM423.5 423.5h47.1v47.06h-47.1zM423.5 94.1h47.1v47.06h-47.1zM376.5 517.6h47v47.06h-47z"/>
                <path d="M376.5 470.6h47v47.06h-47zM376.5 423.5h47v47.06h-47z"/>
                <path d="M376.5 376.5h47v47.05h-47zM376.5 329.4h47v47.06h-47z"/>
                <path d="M376.5 282.4h47v47.06h-47zM376.5 235.3h47v47.06h-47zM376.5 188.2h47v47.06h-47z"/>
                <path d="M376.5 141.2h47v47.06h-47zM376.5 94.1h47v47.06h-47z"/>
                <path d="M376.5 47.1h47v47.06h-47zM329.4 517.6h47.1v47.06h-47.1z"/>
                <path d="M329.4 470.6h47.1v47.06h-47.1zM329.4 423.5h47.1v47.06h-47.1zM329.4 235.3h47.1v47.06h-47.1zM329.4 0h47.1v47.06h-47.1z"/>
                <path d="M282.4 517.6h47.1v47.06h-47.1z"/>
                <path d="M282.4 470.6h47.1v47.06h-47.1zM282.4 376.5h47.1v47.05h-47.1zM282.4 329.4h47.1v47.06h-47.1z"/>
                <path d="M282.4 282.4h47.1v47.06h-47.1zM282.4 94.1h47.1v47.06h-47.1z"/>
                <path d="M282.4 47.1h47.1v47.06h-47.1zM235.3 517.6h47.1v47.06h-47.1z"/>
                <path d="M235.3 470.6h47.1v47.06h-47.1zM235.3 423.5h47.1v47.06h-47.1zM235.3 282.4h47.1v47.06h-47.1zM235.3 235.3h47.1v47.06h-47.1zM188.2 423.5h47.1v47.06h-47.1z"/>
                <path d="M188.2 376.5h47.1v47.05h-47.1zM188.2 235.3h47.1v47.06h-47.1zM188.2 188.2h47.1v47.06h-47.1z"/>
                <path d="M188.2 141.2h47.1v47.06h-47.1zM141.2 376.5h47.1v47.05h-47.1zM141.2 329.4h47.1v47.06h-47.1z"/>
                <path d="M141.2 188.2h47.1v47.06h-47.1z"/>
                <path d="M141.2 141.2h47.1v47.06h-47.1zM94.1 376.5h47.1v47.05H94.1zM94.1 329.4h47.1v47.06H94.1z"/>
                <path d="M94.1 282.4h47.1v47.06H94.1zM94.1 188.2h47.1v47.06H94.1zM47.1 423.5h47.1v47.06H47.1z"/>
                <path d="M47.1 376.5h47.1v47.05H47.1zM47.1 235.3h47.1v47.06H47.1zM0 470.6h47.1v47.06H0z"/>
            </svg>
        </div>
    )
}