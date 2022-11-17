import I18n from '../../src/utils/i18n';
import fr from './fr/rules';
import en from './en/rules';

let rules;
switch (I18n.locale.slice(0, 2)) {
  case 'fr':
    rules = fr;
    break;
  case 'en':
    rules = en;
    break;
  default:
    rules = fr;
}

export default rules;
