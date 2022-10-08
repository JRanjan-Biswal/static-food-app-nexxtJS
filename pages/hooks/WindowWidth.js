import { useState, useEffect } from "react";


export default function UseWindowWidth() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowWidth() {
        const width = hasWindow ? window.innerWidth : null;
        return width;
    }

    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        if (hasWindow) {
            function handleWidth() {
                setWindowWidth(getWindowWidth())
            }
        }

        window.addEventListener('resize', handleWidth);

        return () => window.removeEventListener('resize', handleWidth)
    }, [hasWindow])

    return windowWidth;
}

