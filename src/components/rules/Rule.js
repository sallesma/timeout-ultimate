import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

import theme from '../../utils/theme.js';
import NestedPressableHighlighter from './NestedPressableHighlighter.js';
import BottomSheet from '../shared/BottomSheet.js';
import dictionary from '../../../data/rules/dictionary';

export default ({ number, rule, searchText }) => {
  const indentation = (number.match(/\d+./g) || []).length - 2;
  const dictionaryWords = Object.keys(dictionary);
  const [displayedWord, setDisplayedWord] = useState();

  const onLongPress = async () => {
    const copiedText = `${number} : ${rule}`;
    await Clipboard.setStringAsync(copiedText);
    Toast.show({
      type: 'info',
      text1: `La règle ${number} a été copiée.`,
      text2: copiedText,
      visibilityTime: 2000,
    });
  };

  return (
    <View style={[styles.rule, indentation > 0 && styles.indented, { marginLeft: 16 * indentation }]}>
      <Text style={styles.text} onLongPress={onLongPress}>
        <Text style={styles.number}>{number}</Text>
        <NestedPressableHighlighter
          style={styles.text}
          highlightStyle={styles.searchedText}
          pressableHighlightStyle={styles.pressableText}
          pressableSearchWords={dictionaryWords}
          searchWords={[searchText]}
          textToHighlight={rule}
          onPressHighlightedText={(word) => setDisplayedWord(word.toLowerCase())}
        />
      </Text>
      <BottomSheet onClose={() => setDisplayedWord(undefined)} isVisible={displayedWord !== undefined}>
        <Text style={styles.title}>{displayedWord}</Text>
        <Text>{dictionary[displayedWord]}</Text>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  rule: {
    marginBottom: 8,
  },
  indented: {
    paddingLeft: 8,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: theme.MAIN_COLOR,
  },
  number: {
    color: theme.MAIN_COLOR,
  },
  text: {
    color: 'black',
  },
  searchedText: {
    backgroundColor: 'yellow',
  },
  pressableText: {
    color: theme.MAIN_COLOR,
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: theme.FONT_SIZE_L,
  },
});
