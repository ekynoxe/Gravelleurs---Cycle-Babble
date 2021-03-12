import { useSettings } from './useSettings';
import data from '../data/lang';

const { app: words } = data;

const useTranslation = () => {
  const [settings] = useSettings();
  const t = (key: string): string => {
    if (!words[settings.appLang] || !words[settings.appLang][key]) {
      return key;
    }
    return words[settings.appLang][key];
  };

  return { t };
};

export default useTranslation;
