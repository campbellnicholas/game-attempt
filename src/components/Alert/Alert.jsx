import './Alert.scss';
import cx from 'classnames';

const ALERT_TYPES = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
};

/**
 * Alert component for displaying messages to the user
 * @param {Object} props
 * @param {string} props.message - The message to display
 * @param {string} [props.type=ALERT_TYPES.INFO] - The type of alert (info, success, warning, error)
 */
export default function Alert({ message, type = ALERT_TYPES.INFO }) {
    return (
        <dialog 
            key={`${type}-${Date.now()}`} 
            className={cx('alert', `alert--${type}`)}
        >
            {message}
        </dialog>
    )
}

Alert.TYPES = ALERT_TYPES;