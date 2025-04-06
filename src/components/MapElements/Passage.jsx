import React from 'react';
import cx from 'classnames';
import './Passage.scss';

/**
 * Passage component that renders a map transition point
 * @param {Object} props
 * @param {string} props.gridArea - CSS grid area for positioning
 * @param {string} props.type - Type of passage (hole or stairs)
 * @param {string} [props.direction] - Direction for stairs (up or down)
 */
export default function Passage({ gridArea, type, direction }) {
    return (
        <div 
            className={cx(
                'passage', 
                type,
                type === 'stairs' && direction
            )} 
            style={gridArea && { gridArea }} 
        />
    );
} 