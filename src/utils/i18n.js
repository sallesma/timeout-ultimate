import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en';
import fr from './locales/fr';

const i18n = new I18n({
  en,
  fr,
});

i18n.defaultLocale = 'en';

const deviceLocale = Localization.getLocales()[0];
i18n.locale = deviceLocale.languageCode;
i18n.fallbacks = true;
i18n.enableFallback = true;

export default i18n;
