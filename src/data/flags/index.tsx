import flagsData from './flags.json';

interface Flag {
  code: string;
  unicode: string;
  name: string;
  emoji: string;
}
interface DataType { [key: string]: Flag; }
const FLAGS = flagsData as DataType;

export default FLAGS;
