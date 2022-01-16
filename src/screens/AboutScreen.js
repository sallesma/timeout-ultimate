import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Linking, Pressable } from 'react-native';
import Constants from 'expo-constants';

import theme from '../utils/theme.js';

export default (props) => {
  const { releaseChannel, version } = Constants.manifest;
  const channel = releaseChannel === undefined ? 'DEV' : releaseChannel;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <Text style={styles.header}>À propos</Text>
      <Text style={styles.text}>Bonjour ! Je suis Martin Salles, le développeur derrière 'Ultimate Rules Quizz'. C'est une application conçue par des joueurs d'ultimate pour aider d'autres joueurs à apprendre les règles de l'ultimate. Elle est et restera gratuite.</Text>
      <Text style={styles.header}>Remerciements</Text>
      <Text style={styles.text}>Je souhaite remercier tous ceux qui ont aidé à faire de Ultimate Rules Quizz une super appplication ! Une grande partie des questions viennent du jeu Disque Tu Sais de Pablo. Certaines questions ont été rédigées par Pierre Gruau.</Text>
      <Text style={styles.header}>Contribuer</Text>
      <Text style={styles.text}>Que ce soit pour ajouter, corriger des questions ou maintenir l'application, toute aide est la bienvenue !</Text>
      <Text style={styles.header}>Feedback</Text>
      <Text style={styles.text}>L'application est en cours de création. J'ai plein d'idées pour la suite mais je serais ravi de connaître ton avis</Text>
      <Text style={styles.header}>Autres projets</Text>
      <Text style={styles.text}>En plus de cette application, je travaille aussi sur l'application Disc In, qui permet de préparer des entraînements d'ultimate</Text>
      <Pressable onPress={() => Linking.openURL('https://discinapp.page.link/install')}>
        <Text style={styles.linkText}>Disc In</Text>
      </Pressable>

      <View style={styles.infoArea}>
        <Text style={styles.info}>Informations techniques</Text>
        <Text style={styles.info}>Ultimate Rules Quizz</Text>
        <Text style={styles.info}>2021 - {new Date().getFullYear()}</Text>
        <Text style={styles.info}>Version {version}, release-channel {channel}</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

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
    fontSize: theme.FONT_SIZE_SMALL,
    color: 'grey',
  },
});

