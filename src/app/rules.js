import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ListItem, Input } from 'react-native-elements';
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

  const navigation = useNavigation();

  useFocusEffect(() => {
    navigation.setOptions({
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
        <Input
          autoFocus
          value={searchText}
          onChangeText={setSearchText}
          placeholder={I18n.t('rulesScreen.searchPlaceholder')}
          rightIcon={
            <MaterialCommunityIcons
              name="close-circle"
              size={theme.FONT_SIZE_ICON}
              color="#666666"
              onPress={() => setSearchText('')}
            />
          }
        />
      )}
      {content === 'rules' && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={Object.keys(rules)}
          renderItem={({ item }) => <Chapter title={item} rules={rules[item]} searchText={searchText} />}
        />
      )}
      {content === 'handSignals' && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={handSignals}
          renderItem={({ item }) => <HandSignal item={item} searchText={searchText} />}
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
          <ListItem key={i} onPress={listItem.onPress}>
            <ListItem.Content>
              <ListItem.Title>{listItem.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
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
  },
  headerRightButton: {
    color: 'white',
    marginLeft: 16,
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
