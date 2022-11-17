import I18n from '../../src/utils/i18n';
import fr from './fr/dictionary';
import en from './en/dictionary';

let dictionary;
switch (I18n.locale.slice(0, 2)) {
  case 'fr':
    dictionary = fr;
    break;
  case 'en':
    dictionary = en;
    break;
  default:
    dictionary = fr;
}

export default dictionary;
