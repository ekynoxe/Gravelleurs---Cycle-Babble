import flags from '../flags';
import enTranslate from './translate/en.json';
import esTranslate from './translate/es.json';
import frTranslate from './translate/fr.json';
import enApp from './app/en.json';
import esApp from './app/es.json';
import frApp from './app/fr.json';

import { JSONDataType, Language, Translations } from '../../types'

const EN_WORDS_LEXICON = enTranslate as JSONDataType;
const ES_WORDS_LEXICON = esTranslate as JSONDataType;
const FR_WORDS_LEXICON = frTranslate as JSONDataType;
const EN_WORDS_APP = enApp;
const ES_WORDS_APP = esApp;
const FR_WORDS_APP = frApp;

const translations: Translations = []

const languages = [
  { lang: 'en', country: 'GB' },
  { lang: 'es', country: 'ES' },
  { lang: 'fr', country: 'FR' },
].reduce((acc: { [key: string]: Language }, { lang, country }) => {
  acc[lang] = {
    key: lang,
    label: `${flags[country].emoji} ${lang}`,
  };
  return acc;
}, {});

Object.keys(enTranslate).forEach((k: string) => {
  translations.push({
    en: EN_WORDS_LEXICON[k] || '--',
    es: ES_WORDS_LEXICON[k] || '--',
    fr: FR_WORDS_LEXICON[k] || '--',
  })});

export default {
  languages,
  app: {
    en: EN_WORDS_APP,
    es: ES_WORDS_APP,
    fr: FR_WORDS_APP,
  },
  translations,
};
