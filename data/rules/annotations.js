import I18n from '../../src/utils/i18n';
import fr from './fr/annotations';
import en from './en/annotations';

let annotations;
switch (I18n.locale.slice(0, 2)) {
  case 'fr':
    annotations = fr;
    break;
  case 'en':
    annotations = en;
    break;
  default:
    annotations = fr;
}

export default annotations;
