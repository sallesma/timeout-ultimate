import I18n from '../../src/utils/i18n';
import fr from './fr/handSignals';
import en from './en/handSignals';

let handSignals;
switch (I18n.locale.slice(0, 2)) {
  case 'fr':
    handSignals = fr;
    break;
  case 'en':
    handSignals = en;
    break;
  default:
    handSignals = fr;
}

export default handSignals;
