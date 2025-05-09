import React from 'react';
import { Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { IconButton } from 'react-native-paper';
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
    <IconButton
      icon="alert-octagon-outline"
      iconColor="#666666"
      size={theme.FONT_SIZE_ICON}
      onPress={feedbackAlert}
      style={style}
    />
  );
};

export default FeedbackButton;
