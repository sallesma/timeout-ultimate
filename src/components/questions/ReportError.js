import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../utils/theme.js';
import rules from '../../../data/rules/rules';
import I18n from '../../utils/i18n';

export default ({ question, checked }) => {
  const [expanded, setExpanded] = useState(false);

  const flattenedRules = Object.values(rules).reduce(
    (accumulated, currentChapter) => Object.assign(accumulated, currentChapter),
    {},
  );

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={() => setExpanded(!expanded)}>
        <MaterialCommunityIcons name={expanded ? 'chevron-down' : 'chevron-right'} size={20} color="#666666" />
        <Text style={styles.title}>{question.question}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.expanded}>
          {question.image && (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={question.image} />
            </View>
          )}
          {Object.keys(question.answerChoices).map((answerChoiceKey) => (
            <Text
              key={answerChoiceKey}
              style={[
                styles.answerChoice,
                checked.includes(answerChoiceKey) && styles.checkedAnwser,
                checked.includes(answerChoiceKey) &&
                  !question.correctAnswers.includes(answerChoiceKey) &&
                  styles.wrongAnswer,
                question.correctAnswers.includes(answerChoiceKey) && styles.correctAnswer,
              ]}
            >
              {question.answerChoices[answerChoiceKey]}
            </Text>
          ))}
          <Text>{question.explanation}</Text>
          {question.rules && (
            <>
              <Text style={{ marginTop: 8 }}>{I18n.t('questions.reportError.rule')}</Text>
              {question.rules.map((ruleNumber) => (
                <Text key={ruleNumber} style={styles.rule}>
                  {ruleNumber} {flattenedRules[ruleNumber]}
                </Text>
              ))}
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.MAIN_COLOR,
  },
  title: {
    flex: 1,
    marginLeft: 8,
    fontSize: theme.FONT_SIZE_S,
  },
  expanded: {
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    height: 80,
    marginBottom: 8,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
  },
  answerChoice: {
    paddingLeft: 32,
    padding: 4,
  },
  checkedAnwser: {
    fontWeight: 'bold',
  },
  wrongAnswer: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  correctAnswer: {
    borderLeftColor: theme.RIGHT_COLOR,
    borderLeftWidth: 2,
  },
  rule: {
    fontStyle: 'italic',
  },
});
