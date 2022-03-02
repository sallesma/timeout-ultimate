import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomSheet, ListItem } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../utils/theme.js';
import rules from '../../data/rules/rules';
import handSignals from '../../data/rules/handSignals';

import Chapter from '../components/rules/Chapter';
import HandSignal from '../components/rules/HandSignal';

export default (props) => {
  const [content, setContent] = useState('rules');
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={theme.FONT_SIZE_ICON}
          style={styles.headerRight}
          onPress={() => setIsSelectorVisible(true)}
        />
      ),
    });
  });

  const switchContent = (newContent) => {
    setIsSelectorVisible(false);
    setContent(newContent);
  }

  const list = [
    { title: 'Règles', onPress: () => switchContent('rules')},
    { title: 'Gestes', onPress: () => switchContent('handSignals')},
  ];

  return (
    <View style={styles.container}>
      {content === 'rules' && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={Object.keys(rules)}
          renderItem={({ item }) => (<Chapter title={item} data={rules[item]} />)}
        />
      )}
      {content === 'handSignals' && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={handSignals}
          renderItem={({ item }) => (<HandSignal item={item} />)}
        />
      )}
      <BottomSheet modalProps={{}} isVisible={isSelectorVisible}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerRight: {
    color: 'white',
    marginLeft: 16,
  },
});
