import React from 'react';
import { Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../utils/theme.js';
import I18n from '../../utils/i18n';

export const FeedbackButton = ({ question, style }) => {
  const feedbackAlert = () => {
    Alert.alert(
      I18n.t('questions.feedback.incentiveHeader'),
      I18n.t('questions.feedback.incentiveText'),
      [
        { text: I18n.t('questions.feedback.incentiveCancel'), style: 'cancel' },
        { text: I18n.t('questions.feedback.incentiveCta'), onPress: sendEmailAsync },
      ],
      { cancelable: true },
    );
  };

  const sendEmailAsync = () => {
    MailComposer.composeAsync({
      recipients: ['ultimate.timeout@gmail.com'],
      subject: I18n.t('questions.feedback.mailSubject'),
      body: I18n.t('questions.feedback.mailBody', { question: question.question }),
    });
  };

  return (
    <Button
      type="clear"
      containerStyle={style}
      icon={<MaterialCommunityIcons name="alert-octagon-outline" size={theme.FONT_SIZE_ICON} color="#666666" />}
      onPress={feedbackAlert}
    />
  );
};

export default FeedbackButton;
