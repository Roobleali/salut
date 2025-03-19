import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { urlTranslations } from "../utils/urlUtils";

export function useLocalizedNavigation() {
  const [location, setLocation] = useLocation();
  const { i18n } = useTranslation();

  const navigate = (path: string) => {
    const currentLang = i18n.language;
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;

    // If it's the homepage
    if (!cleanPath) {
      setLocation(`/${currentLang}`);
      return;
    }

    // Split the path into segments
    const segments = cleanPath.split("/");

    // If the first segment is a language code, remove it
    if (segments[0] === "en" || segments[0] === "ro") {
      segments.shift();
    }

    // Translate each segment if a translation exists
    const translatedSegments = segments.map(
      (segment) => urlTranslations[currentLang]?.[segment] || segment
    );

    setLocation(`/${currentLang}/${translatedSegments.join("/")}`);
  };

  return navigate;
}
