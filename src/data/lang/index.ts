import flags from '../flags';
import deTranslate from './translate-parktool/de.json';
import enTranslate from './translate-parktool/en.json';
import esTranslate from './translate-parktool/es.json';
import frTranslate from './translate-parktool/fr.json';
import itTranslate from './translate-parktool/it.json';
import nlTranslate from './translate-parktool/nl.json';
import ptTranslate from './translate-parktool/pt.json';
import rsTranslate from './translate-parktool/rs.json';
import seTranslate from './translate-parktool/se.json';

// import enTranslate from './translate/en.json';
// import esTranslate from './translate/es.json';
// import frTranslate from './translate/fr.json';
import enApp from './app/en.json';
import esApp from './app/es.json';
import frApp from './app/fr.json';

import { JSONDataType, Language, Translations } from '../../types'

const translationsLanguages = ['EN', 'ES', 'FR']
// const translationsLanguages = ['DE', 'EN', 'ES', 'FR', 'IT', 'NL', 'PT', 'RS', 'SE']

const DE_WORDS_LEXICON = deTranslate as JSONDataType;
const EN_WORDS_LEXICON = enTranslate as JSONDataType;
const ES_WORDS_LEXICON = esTranslate as JSONDataType;
const FR_WORDS_LEXICON = frTranslate as JSONDataType;
const IT_WORDS_LEXICON = itTranslate as JSONDataType;
const NL_WORDS_LEXICON = nlTranslate as JSONDataType;
const PT_WORDS_LEXICON = ptTranslate as JSONDataType;
const RS_WORDS_LEXICON = rsTranslate as JSONDataType;
const SE_WORDS_LEXICON = seTranslate as JSONDataType;

const EN_WORDS_APP = enApp;
const ES_WORDS_APP = esApp;
const FR_WORDS_APP = frApp;

const translations: Translations = []

const languages = [
  { lang: 'de', country: 'DE' },
  { lang: 'en', country: 'GB' },
  { lang: 'es', country: 'ES' },
  { lang: 'fr', country: 'FR' },
  { lang: 'it', country: 'IT' },
  { lang: 'nl', country: 'NL' },
  { lang: 'pt', country: 'PT' },
  { lang: 'rs', country: 'RS' },
  { lang: 'se', country: 'SE' },
].reduce((acc: { [key: string]: Language }, { lang, country }) => {
  acc[lang] = {
    key: lang,
    label: `${flags[country].emoji} ${lang}`,
  };
  return acc;
}, {});

Object.keys(enTranslate).forEach((k: string) => {
  translations.push({
    de: DE_WORDS_LEXICON[k] || '--',
    en: EN_WORDS_LEXICON[k] || '--',
    es: ES_WORDS_LEXICON[k] || '--',
    fr: FR_WORDS_LEXICON[k] || '--',
    it: IT_WORDS_LEXICON[k] || '--',
    nl: NL_WORDS_LEXICON[k] || '--',
    pt: PT_WORDS_LEXICON[k] || '--',
    rs: RS_WORDS_LEXICON[k] || '--',
    se: SE_WORDS_LEXICON[k] || '--',
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
