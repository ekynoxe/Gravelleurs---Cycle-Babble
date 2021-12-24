import flags from '../flags';
import enTranslate from './translate/en.json';
import esTranslate from './translate/es.json';
import frTranslate from './translate/fr.json';
import enApp from './app/en.json';
import esApp from './app/es.json';
import frApp from './app/fr.json';

interface DataType { [key: string]: string; }

const EN_WORDS_LEXICON = enTranslate as DataType;
const ES_WORDS_LEXICON = esTranslate as DataType;
const FR_WORDS_LEXICON = frTranslate as DataType;
const EN_WORDS_APP = enApp as DataType;
const ES_WORDS_APP = esApp as DataType;
const FR_WORDS_APP = frApp as DataType;

const wordsTranslate = [] as string[][];
export interface Language {
  key: string;
  label: string;
}

export interface AppWords {
  en: DataType;
  es: DataType;
  fr: DataType;
}

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
  wordsTranslate.push([EN_WORDS_LEXICON[k] || '--', ES_WORDS_LEXICON[k] || '--', FR_WORDS_LEXICON[k] || '--']);
});

export default {
  languages,
  app: {
    en: EN_WORDS_APP,
    es: ES_WORDS_APP,
    fr: FR_WORDS_APP,
  },
  translate: [...wordsTranslate],
};
