import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { urlTranslations } from '@/utils/urlUtils';

export function LanguageRedirect() {
    const [location, setLocation] = useLocation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const currentLang = i18n.language;
        const pathSegments = location.split('/').filter(Boolean);

        // If we're at the root, redirect to the current language
        if (location === '/') {
            setLocation(`/${currentLang}`);
            return;
        }

        // Check if the first segment is a valid language code
        const firstSegment = pathSegments[0];
        if (firstSegment !== 'en' && firstSegment !== 'ro') {
            // If not, prepend the current language to the path
            setLocation(`/${currentLang}${location}`);
            return;
        }

        // If the language in the URL doesn't match the current language
        if (firstSegment !== currentLang) {
            // Get the path segments after the language code
            const remainingSegments = pathSegments.slice(1);

            // Translate each segment if a translation exists
            const translatedSegments = remainingSegments.map(segment => {
                // Check if there's a translation for this segment in the current language
                const translation = urlTranslations[currentLang]?.[segment];
                // If no translation exists, check if there's a reverse translation
                if (!translation) {
                    // Look for a segment that translates to this one in the other language
                    const otherLang = currentLang === 'en' ? 'ro' : 'en';
                    const reverseTranslations = Object.entries(urlTranslations[otherLang] || {});
                    const reverseMatch = reverseTranslations.find(([_, value]) => value === segment);
                    if (reverseMatch) {
                        return urlTranslations[currentLang]?.[reverseMatch[0]] || segment;
                    }
                }
                return translation || segment;
            });

            // Update the URL with the new language and translated segments
            setLocation(`/${currentLang}/${translatedSegments.join('/')}`);
        }
    }, [i18n.language, location]);

    return null;
} 