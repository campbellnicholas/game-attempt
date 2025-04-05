/**
 * Formats the current time into a readable string
 * @returns {string} Formatted time string (e.g. "02:30:45 PM")
 */
export const formatCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
}; 