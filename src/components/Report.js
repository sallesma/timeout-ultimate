import React from 'react';
import { StyleSheet, Text, View, Share } from 'react-native';
import { Button } from 'react-native-elements';
import { Link } from 'expo-router';

import { saveQuizzResult } from '../utils/history';
import theme from '../utils/theme.js';
import ReportError from './questions/ReportError';
import I18n from '../utils/i18n';

export default ({ rightAnswersCount, quizzLength, errors }) => {
  let message;
  if (rightAnswersCount === quizzLength) {
    message = I18n.t('report.perfect');
  } else if (rightAnswersCount / quizzLength > 0.5) {
    message = I18n.t('report.good');
  } else if (rightAnswersCount / quizzLength > 0.2) {
    message = I18n.t('report.average');
  } else {
    message = I18n.t('report.bad');
  }

  const share = async () => {
    try {
      await Share.share({
        title: I18n.t('report.shareTitle'),
        message: I18n.t('report.shareMessage', { right: rightAnswersCount, total: quizzLength }),
      });
    } catch (error) {
      console.log('Error sharing result', error);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{I18n.t('report.header')}</Text>
      </View>
      <Text>{I18n.t('report.result', { count: rightAnswersCount, total: quizzLength })}</Text>
      <Text>{I18n.t('report.commentHeader')}</Text>
      <View style={styles.result}>
        <Text>{message}</Text>
      </View>
      <Button
        containerStyle={styles.buttonContainer}
        title={I18n.t('report.shareCta')}
        onPress={share}
        type="outline"
      />
      <Link href="/" asChild>
        <Button
          containerStyle={styles.buttonContainer}
          title={I18n.t('report.homeCta')}
          type="solid"
          onPress={() => {
            saveQuizzResult({ rightAnswersCount, quizzLength, createdAt: new Date() });
          }}
        />
      </Link>
      {errors.length > 0 && (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>{I18n.t('report.errorsHeader')}</Text>
          </View>
          {errors.map((error, index) => (
            <ReportError key={index} question={error.question} checked={error.checked} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: theme.FONT_SIZE_XL,
  },
  result: {
    marginVertical: 8,
    marginLeft: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
