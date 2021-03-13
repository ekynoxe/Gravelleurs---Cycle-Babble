import * as Localization from 'expo-localization';
import { LanguageDetectorAsyncModule } from 'i18next';

const noop = (): void => {};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    // We will get back a string like "en-US".
    // We return a string like "en" to match our language files.
    callback(Localization.locale.split('-')[0]);
  },
  init: noop,
  cacheUserLanguage: noop,
};

export default languageDetector;
