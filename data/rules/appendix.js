import I18n from '../../src/utils/i18n';
import fr from './fr/appendix';
import en from './en/appendix';

let appendix;
switch (I18n.locale.slice(0, 2)) {
  case 'fr':
    appendix = fr;
    break;
  case 'en':
    appendix = en;
    break;
  default:
    appendix = fr;
}

export default appendix;
