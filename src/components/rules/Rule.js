import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Portal, Snackbar } from 'react-native-paper';

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
  const [snackbarContent, setSnackbarContent] = useState(null);

  const ruleAnnotations = annotations[number];

  const copyRule = async () => {
    const copiedText = `${number} : ${rule}`;
    await Clipboard.setStringAsync(copiedText);
    setSnackbarContent(I18n.t('rule.ruleCopied', { number }));
  };

  const copyAnnotation = async (annotation) => {
    await Clipboard.setStringAsync(stringifyAnnotation(annotation));
    setSnackbarContent(I18n.t('rule.annotationCopied', { number }));
  };

  return (
    <View
      style={[
        styles.rule,
        ruleAnnotations && styles.withAnnotations,
        indentation > 0 && styles.indented,
        { marginLeft: 8 * Math.max(indentation, 0) },
      ]}
    >
      <Text
        style={styles.text}
        onLongPress={copyRule}
        onPress={() => ruleAnnotations && setDisplayAnnotations(!displayAnnotations)}
      >
        <Text style={styles.number}>{number}</Text>
        <NestedPressableHighlighter
          style={[styles.text, indentation < 0 && styles.bold]}
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
            <Text style={styles.bold}>{annotation.title}</Text>
            {annotation.content.map((content, contentIndex) => (
              <View key={contentIndex} style={styles.annotationContent}>
                <Text>
                  <Text style={styles.bold}>{I18n.t(`rule.annotationContent.${content.type}`)} </Text>
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
      <Portal>
        <Snackbar visible={!!snackbarContent} onDismiss={() => setSnackbarContent(null)} duration={2000}>
          {snackbarContent}
        </Snackbar>
      </Portal>
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
  bold: {
    fontWeight: 'bold',
  },
});
