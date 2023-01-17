import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en';
import fr from './locales/fr';
import AsyncStorage from '@react-native-async-storage/async-storage';

const i18n = new I18n({
  en,
  fr,
});

i18n.defaultLocale = 'fr';
i18n.fallbacks = true;
i18n.enableFallback = true;

AsyncStorage.getItem('language').then((lang) => {
  console.log(lang);
  i18n.locale = lang;
  AsyncStorage.setItem('language', lang ? lang : Localization.locale.slice(0, 2)).then();
});

export default i18n;
