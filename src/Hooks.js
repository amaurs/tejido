import { useEffect, useRef, useState } from 'react';

export function useTimeout(callback, delay) {
    const savedCallback = useRef();
    const timeoutRef = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            timeoutRef.current = setTimeout(() => {
                savedCallback.current();
            }, delay);

            return () => clearTimeout(timeoutRef.current);
        }
    }, [delay]);
}
