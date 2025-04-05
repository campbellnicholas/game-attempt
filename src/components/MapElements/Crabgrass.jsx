import React from 'react';
import './Crabgrass.scss';

/**
 * Crabgrass component for map obstacles
 * @param {Object} props
 * @param {string} props.gridArea - CSS grid area position
 */
export default function Crabgrass({ gridArea }) {
    return (
        <div className="crabgrass" style={gridArea && { gridArea }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 564.7">
                <path className="grass" d="M752.9 470.6h47v47.06h-47zM705.9 423.5H753v47.06h-47.1zM705.9 376.5H753v47.05h-47.1zM705.9 235.3H753v47.06h-47.1zM658.8 376.5h47.1v47.05h-47.1zM658.8 329.4h47.1v47.06h-47.1zM658.8 188.2h47.1v47.06h-47.1zM611.8 376.5h47.1v47.05h-47.1zM611.8 329.4h47.1v47.06h-47.1zM611.8 282.4h47.1v47.06h-47.1zM611.8 188.2h47.1v47.06h-47.1zM611.8 141.2h47.1v47.06h-47.1zM564.7 423.5h47.1v47.06h-47.1zM564.7 376.5h47.1v47.05h-47.1zM564.7 235.3h47.1v47.06h-47.1zM564.7 188.2h47.1v47.06h-47.1zM564.7 141.2h47.1v47.06h-47.1zM517.6 517.6h47.1v47.06h-47.1zM517.6 470.6h47.1v47.06h-47.1zM517.6 423.5h47.1v47.06h-47.1zM517.6 282.4h47.1v47.06h-47.1zM517.6 235.3h47.1v47.06h-47.1zM470.6 517.6h47.1v47.06h-47.1zM470.6 470.6h47.1v47.06h-47.1zM470.6 376.5h47.1v47.05h-47.1zM470.6 329.4h47.1v47.06h-47.1zM470.6 282.4h47.1v47.06h-47.1zM470.6 141.2h47.1v47.06h-47.1zM423.5 517.6h47.1v47.06h-47.1zM423.5 470.6h47.1v47.06h-47.1zM423.5 423.5h47.1v47.06h-47.1zM423.5 94.1h47.1v47.06h-47.1zM376.5 517.6h47v47.06h-47zM376.5 470.6h47v47.06h-47zM376.5 423.5h47v47.06h-47zM376.5 376.5h47v47.05h-47zM376.5 329.4h47v47.06h-47zM376.5 282.4h47v47.06h-47zM376.5 235.3h47v47.06h-47zM376.5 188.2h47v47.06h-47zM376.5 141.2h47v47.06h-47zM376.5 94.1h47v47.06h-47zM376.5 47.1h47v47.06h-47zM329.4 517.6h47.1v47.06h-47.1zM329.4 470.6h47.1v47.06h-47.1zM329.4 423.5h47.1v47.06h-47.1zM329.4 235.3h47.1v47.06h-47.1zM329.4 0h47.1v47.06h-47.1zM282.4 517.6h47.1v47.06h-47.1zM282.4 470.6h47.1v47.06h-47.1zM282.4 376.5h47.1v47.05h-47.1zM282.4 329.4h47.1v47.06h-47.1zM282.4 282.4h47.1v47.06h-47.1zM282.4 94.1h47.1v47.06h-47.1zM282.4 47.1h47.1v47.06h-47.1zM235.3 517.6h47.1v47.06h-47.1zM235.3 470.6h47.1v47.06h-47.1zM235.3 423.5h47.1v47.06h-47.1zM235.3 282.4h47.1v47.06h-47.1zM235.3 235.3h47.1v47.06h-47.1zM188.2 423.5h47.1v47.06h-47.1zM188.2 376.5h47.1v47.05h-47.1zM188.2 235.3h47.1v47.06h-47.1zM188.2 188.2h47.1v47.06h-47.1zM188.2 141.2h47.1v47.06h-47.1zM141.2 376.5h47.1v47.05h-47.1zM141.2 329.4h47.1v47.06h-47.1zM141.2 188.2h47.1v47.06h-47.1zM141.2 141.2h47.1v47.06h-47.1zM94.1 376.5h47.1v47.05H94.1zM94.1 329.4h47.1v47.06H94.1zM94.1 282.4h47.1v47.06H94.1zM94.1 188.2h47.1v47.06H94.1zM47.1 423.5h47.1v47.06H47.1zM47.1 376.5h47.1v47.05H47.1zM47.1 235.3h47.1v47.06H47.1zM0 470.6h47.1v47.06H0z"/>
            </svg>
        </div>
    );
} 