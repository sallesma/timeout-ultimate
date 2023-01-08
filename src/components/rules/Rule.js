import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../utils/theme.js';
import I18n from '../../utils/i18n';
import NestedPressableHighlighter from './NestedPressableHighlighter.js';
import BottomSheet from '../shared/BottomSheet.js';
import dictionary from '../../../data/rules/dictionary';
import annotations from '../../../data/rules/annotations';

const stringifyAnnotation = (annotation) => {
  const content = annotation.content.map(
    (content) => `${I18n.t(`rule.annotationContent.${content.type}`)} : ${content.text}\n`,
  );
  return `${annotation.title} \n${content}`;
};

export default ({ number, rule, searchText }) => {
  const indentation = (number.match(/\d+./g) || []).length - 2;
  const dictionaryWords = Object.keys(dictionary);
  const [displayedWord, setDisplayedWord] = useState();
  const [displayAnnotations, setDisplayAnnotations] = useState(false);

  const ruleAnnotations = annotations[number];

  const copyRule = async () => {
    const copiedText = `${number} : ${rule}`;
    await Clipboard.setStringAsync(copiedText);
    Toast.show({
      type: 'info',
      text1: I18n.t('rule.ruleCopied', { number }),
      text2: copiedText,
      visibilityTime: 2000,
    });
  };

  const copyAnnotation = async (annotation) => {
    await Clipboard.setStringAsync(stringifyAnnotation(annotation));
    Toast.show({
      type: 'info',
      text1: I18n.t('rule.annotationCopied'),
      text2: stringifyAnnotation(annotation),
      visibilityTime: 2000,
    });
  };

  return (
    <View
      style={[
        styles.rule,
        ruleAnnotations && styles.withAnnotations,
        indentation > 0 && styles.indented,
        { marginLeft: 16 * indentation },
      ]}
    >
      <Text
        style={styles.text}
        onLongPress={copyRule}
        onPress={() => ruleAnnotations && setDisplayAnnotations(!displayAnnotations)}
      >
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
        {ruleAnnotations && (
          <MaterialCommunityIcons name="text-box-plus-outline" size={theme.FONT_SIZE_L} color="#666666" />
        )}
      </Text>
      {displayAnnotations &&
        Object.values(ruleAnnotations).map((annotation, index) => (
          <Pressable
            key={index}
            onPress={() => setDisplayAnnotations(!displayAnnotations)}
            onLongPress={() => copyAnnotation(annotation)}
          >
            <Text style={styles.annotationTitle}>{annotation.title}</Text>
            {annotation.content.map((content, contentIndex) => (
              <View key={contentIndex} style={styles.annotationContent}>
                <Text>
                  <Text style={styles.annotationTitle}>{I18n.t(`rule.annotationContent.${content.type}`)} </Text>
                  {content.text}
                </Text>
              </View>
            ))}
          </Pressable>
        ))}
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
  withAnnotations: {
    backgroundColor: '#dbeeee',
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
  annotationTitle: {
    fontWeight: 'bold',
  },
});
