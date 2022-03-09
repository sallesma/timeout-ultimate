import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { BottomSheet, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import rules from '../../../data/rules/rules';
import theme from '../../utils/theme.js';

export default ({ruleNumbers}) => {
  if (!ruleNumbers) return null;

  const [isVisible, setIsVisible] = useState(false);

  const flattenedRules = Object.values(rules).reduce((accumulated, currentChapter) => Object.assign(accumulated, currentChapter), {});

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
          {ruleNumbers.map((ruleNumber) => (
            <View key={ruleNumber}>
              <Text style={styles.title}>Règle {ruleNumbers}</Text>
              <Text>{flattenedRules[ruleNumber]}</Text>
            </View>
          ))}
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
