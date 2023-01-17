import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Linking, Pressable } from 'react-native';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import * as MailComposer from 'expo-mail-composer';

import theme from '../utils/theme.js';
import I18n from '../utils/i18n';

export default () => {
  const sendEmailAsync = () => {
    MailComposer.composeAsync({
      recipients: ['ultimate.timeout@gmail.com'],
      subject: I18n.t('aboutScreen.mailSubject'),
    }).then();
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.header}>{I18n.t('aboutScreen.aboutHeader')}</Text>
      <Text style={styles.text}>{I18n.t('aboutScreen.aboutText')}</Text>
      <Text style={styles.header}>{I18n.t('aboutScreen.thanksHeader')}</Text>
      <Text style={styles.text}>{I18n.t('aboutScreen.thanksText')}</Text>
      <Text style={styles.text}>{I18n.t('aboutScreen.rulesDisclaimer')}</Text>
      <Text style={styles.header}>{I18n.t('aboutScreen.contributeHeader')}</Text>
      <Text style={styles.text}>{I18n.t('aboutScreen.contributeText')}</Text>
      <Text style={styles.header}>{I18n.t('aboutScreen.feedbackHeader')}</Text>
      <Text style={styles.text}>{I18n.t('aboutScreen.feedbackText')}</Text>
      <Pressable onPress={sendEmailAsync}>
        <Text style={styles.linkText}>{I18n.t('aboutScreen.feedbackCta')}</Text>
      </Pressable>
      <Text style={styles.header}>{I18n.t('aboutScreen.discInHeader')}</Text>
      <Text style={styles.text}>{I18n.t('aboutScreen.discInText')}</Text>
      <Pressable onPress={() => Linking.openURL('https://discinapp.page.link/install')}>
        <Text style={styles.linkText}>{I18n.t('aboutScreen.discInCta')}</Text>
      </Pressable>

      <View style={styles.infoArea}>
        <Text style={styles.info}>{I18n.t('aboutScreen.information')}</Text>
        <Text style={styles.info}>Timeout Ultimate</Text>
        <Text style={styles.info}>2021 - {new Date().getFullYear()}</Text>
        <Text style={styles.info}>
          Version {Constants.manifest.version}, release-channel {Updates.releaseChannel}
        </Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 64,
  },
  header: {
    marginTop: 8,
    fontSize: theme.FONT_SIZE_L,
  },
  text: {
    marginTop: 8,
    fontSize: theme.FONT_SIZE_S,
  },
  linkText: {
    marginTop: 8,
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_M,
  },
  infoArea: {
    marginTop: 32,
  },
  info: {
    fontSize: theme.FONT_SIZE_S,
    color: 'grey',
  },
});
