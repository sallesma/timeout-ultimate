import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import rules from '../../../data/rules/rules';
import theme from '../../utils/theme.js';
import BottomSheet from '../shared/BottomSheet.js';

export default ({ ruleNumbers }) => {
  if (!ruleNumbers) return null;

  const [isVisible, setIsVisible] = useState(false);

  const flattenedRules = Object.values(rules).reduce(
    (accumulated, currentChapter) => Object.assign(accumulated, currentChapter),
    {},
  );

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
      <BottomSheet onClose={() => setIsVisible(false)} isVisible={isVisible}>
        {ruleNumbers.map((ruleNumber) => (
          <View key={ruleNumber}>
            <Text style={styles.title}>Règle {ruleNumber}</Text>
            <Text>{flattenedRules[ruleNumber]}</Text>
          </View>
        ))}
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
});
