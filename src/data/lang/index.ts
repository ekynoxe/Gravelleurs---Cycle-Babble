import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import flags from '../flags';

interface DataType { [key: string]: string; }
const EN_WORDS = en as DataType;
const ES_WORDS = es as DataType;
const FR_WORDS = fr as DataType;
const words = [] as string[][];
// const langs = [
//   `${flags.GB.emoji} GB`,
//   `${flags.ES.emoji} ES`,
//   `${flags.FR.emoji} FR`,
// ] as string[];

export interface Language {
  key: string;
  label: string;
}

const languages = ['GB', 'ES', 'FR'].reduce((acc: { [key: string]: Language }, lang) => {
  acc[lang] = {
    key: lang,
    label: `${flags[lang].emoji} ${lang}`,
  };
  return acc;
}, {});

Object.keys(en).forEach((k: string) => {
  words.push([EN_WORDS[k] || '--', ES_WORDS[k] || '--', FR_WORDS[k] || '--']);
});

export default {
  languages,
  rows: [...words],
};
