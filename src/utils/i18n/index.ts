import {
  initReactI18next,
  useTranslation as reactI18UseTranslation,
  UseTranslationResponse,
} from 'react-i18next';
import i18n, { LanguageDetectorModule } from 'i18next';

import resourcesEN from '../../data/lang/app/en.json';
import resourcesES from '../../data/lang/app/es.json';
import resourcesFR from '../../data/lang/app/fr.json';

const fallback = 'en';
const defaultNamespace = 'gravelleurs-babble';
const namespaces = [defaultNamespace];

const i18nextConfiguration = {
  fallbackLng: fallback,
  resources: {
    en: {
      [defaultNamespace]: resourcesEN,
    },
    es: {
      [defaultNamespace]: resourcesES,
    },
    fr: {
      [defaultNamespace]: resourcesFR,
    },
  },
  ns: namespaces,
  defaultNS: defaultNamespace,
  interpolation: {
    escapeValue: false,
  },
};

export const initI18n = (
  languageDetector: LanguageDetectorModule,
): Promise<typeof i18n> => i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init(i18nextConfiguration)
  .then(() => i18n);

export const I18NextNamespace = 'gravelleurs-babble';

export const useTranslation = (): UseTranslationResponse<typeof I18NextNamespace> => (
  reactI18UseTranslation(I18NextNamespace)
);

export default i18n;
