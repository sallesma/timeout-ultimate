import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList, Text, SectionList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { List, TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../utils/theme.js';
import rules from '../../data/rules/rules';
import handSignals from '../../data/rules/handSignals';
import appendix from '../../data/rules/appendix';
import I18n from '../utils/i18n';

import Chapter from '../components/rules/Chapter';
import HandSignal from '../components/rules/HandSignal';
import BottomSheet from '../components/shared/BottomSheet.js';

export default (props) => {
  const [content, setContent] = useState('rules');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <MaterialCommunityIcons
            name="text-search"
            size={theme.FONT_SIZE_ICON}
            style={styles.headerRightButton}
            onPress={() => setIsSearchVisible(!isSearchVisible)}
          />
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={theme.FONT_SIZE_ICON}
            style={styles.headerRightButton}
            onPress={() => setIsSelectorVisible(true)}
          />
        </View>
      ),
    });
  });

  const switchContent = (newContent) => {
    setIsSelectorVisible(false);
    setContent(newContent);
  };

  const list = [
    { title: I18n.t('rulesScreen.rules'), onPress: () => switchContent('rules') },
    { title: I18n.t('rulesScreen.handSignals'), onPress: () => switchContent('handSignals') },
    { title: I18n.t('rulesScreen.appendix'), onPress: () => switchContent('appendix') },
  ];

  return (
    <View style={styles.container}>
      {isSearchVisible && (
        <TextInput
          dense
          autoFocus
          mode="outlined"
          value={searchText}
          onChangeText={setSearchText}
          placeholder={I18n.t('rulesScreen.searchPlaceholder')}
          right={<TextInput.Icon icon="close-circle" size={theme.FONT_SIZE_ICON} onPress={() => setSearchText('')} />}
          style={{ marginBottom: 8 }}
        />
      )}
      {content === 'rules' && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={Object.keys(rules)}
          renderItem={({ item }) => <Chapter title={item} rules={rules[item]} searchText={searchText} />}
          keyboardShouldPersistTaps="handled"
        />
      )}
      {content === 'handSignals' && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={handSignals}
          renderItem={({ item }) => <HandSignal item={item} searchText={searchText} />}
          keyboardShouldPersistTaps="handled"
        />
      )}
      {content === 'appendix' && (
        <SectionList
          keyExtractor={(item, index) => index.toString()}
          sections={Object.keys(appendix).map((appendixSection) => ({
            title: appendixSection,
            data: Object.keys(appendix[appendixSection]),
          }))}
          renderSectionHeader={({ section }) => (
            <View style={styles.appendixSection}>
              <Text style={styles.appendixSectionText}>{section.title}</Text>
            </View>
          )}
          renderItem={({ item, section }) => (
            <Chapter title={item} rules={appendix[section.title][item]} searchText={searchText} />
          )}
        />
      )}
      <BottomSheet onClose={() => setIsSelectorVisible(false)} isVisible={isSelectorVisible}>
        {list.map((listItem, i) => (
          <List.Item key={i} title={listItem.title} onPress={listItem.onPress} />
        ))}
      </BottomSheet>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 16,
  },
  headerRightButton: {
    color: 'white',
    padding: 8,
  },
  appendixSection: {
    backgroundColor: theme.MAIN_COLOR_LIGHT,
  },
  appendixSectionText: {
    fontSize: theme.FONT_SIZE_L,
    fontWeight: 'bold',
    color: theme.MAIN_COLOR,
  },
});
