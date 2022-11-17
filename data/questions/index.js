import I18n from '../../src/utils/i18n';
import fr from './fr';
import en from './en';

let questions;
switch (I18n.locale.slice(0, 2)) {
  case 'fr':
    questions = fr;
    break;
  case 'en':
    questions = en;
    break;
  default:
    questions = fr;
}

export default questions;
