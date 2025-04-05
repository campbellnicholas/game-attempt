import React from 'react';
import cx from 'classnames';
import './Passage.scss';

/**
 * Passage component that renders a map transition point
 * @param {Object} props
 * @param {string} props.gridArea - CSS grid area for positioning
 * @param {string} props.type - Type of passage (hole or stairs)
 */
export default function Passage(props) {
    return <div className={cx('passage', props.type)} style={props.gridArea && {gridArea: props.gridArea}} />;
} 