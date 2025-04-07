import { useState, useEffect } from 'react';
import cx from 'classnames';
import './Player.scss';

/**
 * Player component for the game
 * @param {Object} props
 * @param {string} [props.gridArea] - CSS grid area position
 * @param {Array} [props.nearbyItems] - Items that the player is near
 */
export default function Player({ gridArea, nearbyItems = [] }) {
    // Group related state together
    const [playerState, setPlayerState] = useState({
        isMoving: false,
        isInteracting: false,
        emoji: '😐'
    });

    // Handle movement animation
    useEffect(() => {
        if (gridArea) {
            // Set moving state
            setPlayerState(prevState => ({
                ...prevState,
                isMoving: true
            }));

            // Reset movement state after animation
            const timer = setTimeout(() => {
                setPlayerState(prevState => ({
                    ...prevState,
                    isMoving: false
                }));
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [gridArea]);

    // Handle interaction with nearby items
    useEffect(() => {
        if (nearbyItems.length > 0) {
            // Batch state updates for interaction
            setPlayerState(prevState => ({
                ...prevState,
                isInteracting: true,
                emoji: getInteractionEmoji(nearbyItems[0].type)
            }));

            // Reset interaction state
            const timer = setTimeout(() => {
                setPlayerState(prevState => ({
                    ...prevState,
                    isInteracting: false,
                    emoji: '😐'
                }));
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [nearbyItems]);

    // Helper function to get appropriate emoji for interaction
    const getInteractionEmoji = (type) => {
        switch (type) {
            case 'item':
                return '🤔';
            case 'enemy':
                return '😨';
            case 'npc':
                return '😊';
            case 'door':
                return '🚪';
            default:
                return '😐';
        }
    };

    return (
        <div 
            className={cx(
                'root',
                playerState.isMoving && 'moving',
                playerState.isInteracting && 'interacting'
            )} 
            style={gridArea && { gridArea }}
        >
            <div className="player-sprite">{playerState.emoji}</div>
            {playerState.isInteracting && (
                <div className="interaction-indicator">!</div>
            )}
        </div>
    );
}