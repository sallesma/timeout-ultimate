import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { findAll } from 'highlight-words-core';
import Highlighter from 'react-native-highlight-words';

// Taken from https://stackoverflow.com/questions/54461242/react-native-highlight-word-and-make-it-clickable
// Introduces extra props (pressable) to introduce a nested highlighter

export default function NestedPressableHighlighter({
  pressableHighlightStyle,
  pressableSearchWords,
  onPressHighlightedText,
  autoEscape,
  highlightStyle,
  searchWords,
  textToHighlight,
  sanitize,
  style,
  ...props
}) {
  const chunks = findAll({ textToHighlight, searchWords: pressableSearchWords, sanitize, autoEscape });

  return (
    <Text style={style} {...props}>
      {chunks.map((chunk, index) => {
        const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
        return chunk.highlight ? (
          <Text
            onPress={() => onPressHighlightedText(text)}
            key={index}
            style={chunk.highlight && pressableHighlightStyle}
          >
            {text}
          </Text>
        ) : (
          <Highlighter
            key={index}
            style={style}
            highlightStyle={highlightStyle}
            searchWords={searchWords}
            textToHighlight={text}
          />
        );
      })}
    </Text>
  );
}
