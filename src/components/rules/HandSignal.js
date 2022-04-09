import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Highlighter from 'react-native-highlight-words';

import theme from '../../utils/theme.js';

export default ({ item, searchText }) => {
  if (searchText.length > 0 && item.name.search(new RegExp(searchText, 'gi')) === -1) return null;

  return (
    <View style={styles.handSignal}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
      </View>
      <Highlighter
        style={styles.name}
        highlightStyle={{ backgroundColor: 'yellow' }}
        searchWords={[searchText]}
        textToHighlight={item.name}
      />
      <Text style={styles.hint}>{item.hint}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  handSignal: {
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    height: 100,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
  },
  name: {
    fontSize: theme.FONT_SIZE_L,
    textAlign: 'center',
  },
  hint: {
    fontSize: theme.FONT_SIZE_S,
  },
});
