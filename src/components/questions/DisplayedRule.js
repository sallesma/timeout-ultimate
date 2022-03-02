import React, { useState } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { BottomSheet, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import rules from '../../../data/rules/rules';
import theme from '../../utils/theme.js';

export default ({ruleNumber}) => {
  if (!ruleNumber) return null;

  const [isVisible, setIsVisible] = useState(false);

  const flattenedRules = Object.values(rules).reduce((accumulated, currentChapter) => Object.assign(accumulated, currentChapter), {});
  const rule = flattenedRules[ruleNumber];

  return (
    <>
      <Button
        type="outline"
        title="Voir la règle"
        containerStyle={styles.ctaContainer}
        buttonStyle={styles.ctaButton}
        titleStyle={styles.ctaText}
        onPress={() => setIsVisible(true)}
      />
      <BottomSheet modalProps={{onRequestClose: () => setIsVisible(false)}} isVisible={isVisible}>
        <Pressable style={styles.ruleContainer} onPress={() => setIsVisible(false)} >
          <Text style={styles.title}>Règle {ruleNumber}</Text>
          <Text>{rule}</Text>
          <Button
            type='clear'
            containerStyle={styles.closeIcon}
            icon={<MaterialCommunityIcons name="close" size={theme.FONT_SIZE_ICON} color="#666666" />}
            onPress={() => setIsVisible(false)}
          />
        </Pressable>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  ruleContainer: {
    backgroundColor: theme.MAIN_COLOR_LIGHT,
    padding: 16,
  },
  ctaContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  ctaButton: {
    flex: 1,
    padding: 0,
    width: 120,
  },
  ctaText: {
    fontSize: theme.FONT_SIZE_S,
  },
  title: {
    fontSize: theme.FONT_SIZE_L,
  },
  cta: {
    textDecorationLine: 'underline',
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
