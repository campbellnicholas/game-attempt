import { useState, useEffect } from 'react';

/**
 * Custom hook for managing localStorage state
 * @param {string} key - The key to use in localStorage
 * @param {any} initialValue - The initial value if no value exists in localStorage
 * @returns {[any, Function]} Array containing the value and setter function
 */
export const useLocalStorage = (key, initialValue) => {
    // Get from localStorage on initial render
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });

    // Update localStorage when value changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}; 