import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListItem, Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../utils/theme.js';
import rules from '../../data/rules/rules';
import handSignals from '../../data/rules/handSignals';

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
    { title: 'Règles', onPress: () => switchContent('rules') },
    { title: 'Gestes', onPress: () => switchContent('handSignals') },
  ];

  return (
    <View style={styles.container}>
      {isSearchVisible && (
        <Input
          autoFocus
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Rechercher un mot…"
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
});
