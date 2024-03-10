import { RefObject, useEffect } from "react";


export function useOutsideEvent<T extends HTMLElement, K extends HTMLElement>(ref: RefObject<T>, callback: (event: MouseEvent) => void, excludeRef?: RefObject<K>) {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && !excludeRef?.current?.contains(event.target as Node)) {
                callback(event);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick)

        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [ref, callback, excludeRef])
}
