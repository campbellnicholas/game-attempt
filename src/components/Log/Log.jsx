import './Log.scss';

/**
 * Log component for displaying game log
 * @param {Object} props
 * @param {string} props.log - The log text to display
 */
export default function Log({ log }) {
    return <textarea disabled={true} className="log" value={log} />
}