import en from './data/en.json';
import es from './data/es.json';
import fr from './data/fr.json';

interface DataType { [key: string]: string; }
const EN_WORDS = en as DataType;
const ES_WORDS = es as DataType;
const FR_WORDS = fr as DataType;
const words = [] as string[][];
const langs = ['en', 'es', 'fr'] as string[];

Object.keys(en).forEach((k: string) => {
  words.push([EN_WORDS[k] || '--', ES_WORDS[k] || '--', FR_WORDS[k] || '--']);
});

export default {
  head: [...langs],
  rows: [...words],
};
