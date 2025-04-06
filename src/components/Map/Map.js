import React from 'react';
import './Map.scss';
import cx from 'classnames';
import { Tree, Rock, Crabgrass, Passage } from '../MapElements';

/**
 * Map component that renders the game map with obstacles and passages
 * @param {Object} props
 * @param {string} props.season - Current season for styling
 * @param {string} props.background - Background color/style
 * @param {Object} props.obstacles - Map obstacles configuration
 * @param {Object} props.flourishes - Map decorative elements
 * @param {Array} props.passages - Map transition points
 */
export default function Map(props) {
    return (
        <div className={cx('mapRoot', props.season)} style={props.background && {background: props.background}}>
            {props?.obstacles?.tree?.map(gridArea => <Tree key={`tree-${gridArea}`} gridArea={gridArea} />)}
            {props?.obstacles?.rock?.map(gridArea => <Rock key={`rock-${gridArea}`} gridArea={gridArea} />)}
            {props?.flourishes?.crabgrass?.map(gridArea => <Crabgrass key={`crabgrass-${gridArea}`} gridArea={gridArea} />)}
            {props?.passages?.map(passage => (
                <Passage 
                    key={`passage-${passage.position}`} 
                    gridArea={passage.position} 
                    type={passage.type} 
                    direction={passage.direction}
                />
            ))}
        </div>
    );
}