import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function LanguageRedirect() {
    const [location, setLocation] = useLocation();

    useEffect(() => {
        const pathSegments = location.split('/').filter(Boolean);

        // If the first segment is a language code, remove it
        const firstSegment = pathSegments[0];
        if (firstSegment === 'en' || firstSegment === 'ro') {
            // Remove the language prefix and update the URL
            const newPath = '/' + pathSegments.slice(1).join('/');
            setLocation(newPath);
        }
    }, [location]);

    return null;
} 