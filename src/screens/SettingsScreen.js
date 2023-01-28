import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { DevSettings, ScrollView, StyleSheet, View, Text } from 'react-native';

import I18n from '../utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import theme from '../utils/theme';
import { SelectList } from 'react-native-dropdown-select-list';

export default () => {
  const [language, setlanguage] = useState('');

  useEffect(() => {
    (async function loadResults() {
      setlanguage(await AsyncStorage.getItem('language'));
    })();
  }, []);

  async function setLanguage(lang) {
    if (lang === (await AsyncStorage.getItem('language'))) return;
    await AsyncStorage.setItem('language', lang);
    DevSettings.reload();
    RNRestart.Restart(); // doesn't work in dev, needs prev line
  }

  const languages = [
    { key: 'fr', value: 'Français' },
    { key: 'en', value: 'English' },
  ];

  function getLangOption(lang) {
    for (const v of languages) {
      if (v['key'] === lang) return v;
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.text}>{I18n.t('settingsScreen.choseLanguage')}</Text>
          <SelectList
            setSelected={setLanguage}
            data={languages}
            save="key"
            search={false}
            maxHeight={100}
            defaultOption={getLangOption(language)}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginBottom: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: theme.FONT_SIZE_L,
    marginBottom: 3,
  },
});
