import flags from '../flags';
import enLexicon from './lexicon/en.json';
import esLexicon from './lexicon/es.json';
import frLexicon from './lexicon/fr.json';
import enApp from './app/en.json';
import esApp from './app/es.json';
import frApp from './app/fr.json';

interface DataType { [key: string]: string; }

const EN_WORDS_LEXICON = enLexicon as DataType;
const ES_WORDS_LEXICON = esLexicon as DataType;
const FR_WORDS_LEXICON = frLexicon as DataType;
const EN_WORDS_APP = enApp as DataType;
const ES_WORDS_APP = esApp as DataType;
const FR_WORDS_APP = frApp as DataType;
// const wordsApp = {} as { [key: string]: { [key: string]: string; } };
const wordsLexicon = [] as string[][];
export interface Language {
  key: string;
  label: string;
}

export interface AppWords {
  en: DataType;
  es: DataType;
  fr: DataType;
}

const languages = ['GB', 'ES', 'FR'].reduce((acc: { [key: string]: Language }, lang) => {
  acc[lang] = {
    key: lang,
    label: `${flags[lang].emoji} ${lang}`,
  };
  return acc;
}, {});

Object.keys(enLexicon).forEach((k: string) => {
  wordsLexicon.push([EN_WORDS_LEXICON[k] || '--', ES_WORDS_LEXICON[k] || '--', FR_WORDS_LEXICON[k] || '--']);
});

export default {
  languages,
  app: {
    EN: EN_WORDS_APP,
    ES: ES_WORDS_APP,
    FR: FR_WORDS_APP,
  },
  lexicon: [...wordsLexicon],
};
