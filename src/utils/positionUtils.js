/**
 * Updates position based on movement and checks boundaries/obstacles
 * @param {string} currentPosition - Current position in 'x/y' format
 * @param {number[]} update - Array of [x, y] changes
 * @param {number[]} boundaries - Array of [minX, maxX, minY, maxY]
 * @param {string[]} obstacles - Array of obstacle positions
 * @param {Object[]} passages - Array of passage objects
 * @returns {Object} - New position and any map/alert changes
 */
export const updatePosition = (currentPosition, update, boundaries, obstacles, passages) => {
    const oldPosition = currentPosition.split('/').map(num => parseInt(num));

    // Check boundaries
    if ((oldPosition[0] + update[0] < boundaries[0]) || oldPosition[0] + update[0] > boundaries[2]) return null;
    if ((oldPosition[1] + update[1] < boundaries[3]) || oldPosition[1] + update[1] > boundaries[1]) return null;

    const newPosition = oldPosition.map((coord, i) => `${coord + update[i]}`).join('/');

    // Check obstacles
    if (obstacles && obstacles.includes(newPosition)) return null;

    // Check passages
    const passage = passages?.find(p => p.position === newPosition);
    
    const result = {
        position: newPosition
    };

    if (passage) {
        result.mapChange = passage.to;
        result.alert = passage.alert;
        result.alertType = passage.alertType || 'info';
    }
    
    return result;
}; 