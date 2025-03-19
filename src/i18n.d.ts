declare module "@/i18n" {
  const i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  export default i18n;
}
