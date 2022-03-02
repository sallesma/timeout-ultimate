import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import theme from '../../utils/theme.js';

export default ({item}) => (
  <View style={styles.handSignal}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={item.image} />
    </View>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.hint}>{item.hint}</Text>
  </View>
);

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
