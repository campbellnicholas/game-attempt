import { useId, useSyncExternalStore, useInsertionEffect } from 'react';
import './Alert.scss';
import cx from 'classnames';

const ALERT_TYPES = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
};

// Simple store for managing alert state
const alertStore = {
    isOpen: false,
    listeners: new Set(),
    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    },
    getSnapshot() {
        return this.isOpen;
    },
    open() {
        this.isOpen = true;
        this.notify();
    },
    close() {
        this.isOpen = false;
        this.notify();
    },
    notify() {
        this.listeners.forEach(listener => listener());
    }
};

/**
 * Alert component for displaying messages to the user
 * @param {Object} props
 * @param {string} props.message - The message to display
 * @param {string} [props.type=ALERT_TYPES.INFO] - The type of alert (info, success, warning, error)
 * @param {number} [props.duration=3000] - How long to show the alert in milliseconds
 */
export default function Alert({ message, type = ALERT_TYPES.INFO, duration = 3000 }) {
    const alertId = useId();
    
    // Use external store for managing open state
    const isOpen = useSyncExternalStore(
        (callback) => alertStore.subscribe(callback),
        () => alertStore.getSnapshot()
    );

    // Handle animations with useInsertionEffect
    useInsertionEffect(() => {
        if (message) {
            alertStore.open();
            const timer = setTimeout(() => {
                alertStore.close();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration]);

    if (!isOpen) return null;

    return (
        <dialog 
            key={`alert-${alertId}`} 
            className={cx('alert', `alert--${type}`)}
            aria-labelledby={alertId}
            aria-live="polite"
            role="alert"
            aria-atomic="true"
        >
            <div id={alertId} className="alert-message">
                {message}
            </div>
            <button 
                className="alert-close"
                onClick={() => alertStore.close()}
                aria-label="Close alert"
            >
                ×
            </button>
        </dialog>
    )
}

Alert.TYPES = ALERT_TYPES;