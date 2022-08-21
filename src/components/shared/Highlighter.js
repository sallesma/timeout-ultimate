import React from 'react';
import { Text } from 'react-native';
import { findAll } from 'highlight-words-core';

export default function Highlighter({
  autoEscape,
  highlightStyle,
  searchWords,
  textToHighlight,
  sanitize,
  style,
  ...props
}) {
  const chunks = findAll({ textToHighlight, searchWords, sanitize, autoEscape });

  return (
    <Text style={style} {...props}>
      {chunks.map((chunk, index) => {
        const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);

        return !chunk.highlight ? (
          text
        ) : (
          <Text key={index} style={chunk.highlight && highlightStyle}>
            {text}
          </Text>
        );
      })}
    </Text>
  );
}
