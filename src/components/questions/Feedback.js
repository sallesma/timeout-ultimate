import React from 'react';
import { Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../utils/theme.js';

export const FeedbackButton = ({ question, style }) => {
  const feedbackAlert = () => {
    Alert.alert(
      'Signalement',
      "Si une question n'est pas claire ou non conforme aux règles, merci de nous le signaler",
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Message', onPress: sendEmailAsync },
      ],
      { cancelable: true },
    );
  };

  const sendEmailAsync = () => {
    MailComposer.composeAsync({
      recipients: ['ultimate.timeout@gmail.com'],
      subject: "Une question n'est pas claire sur Timeout Ultimate",
      body: `

> Question concernée : ${question.question}


      `,
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
