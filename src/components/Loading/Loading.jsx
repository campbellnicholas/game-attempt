import './Loading.scss';

/**
 * Loading component for transitions
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether the component should show loading state
 */
export default function Loading({ isLoading }) {
    if (!isLoading) return null;

    return (
        <div className="loading">
            <div className="loading-spinner">🌀</div>
            <div className="loading-text">Loading...</div>
        </div>
    );
} 