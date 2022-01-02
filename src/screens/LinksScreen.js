import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, ScrollView, View, Linking, Pressable } from 'react-native';

import theme from '../utils/theme.js';

export default (props) => {
  const Link = ({url, text}) => {
    const onPress = () => Linking.canOpenURL(url).then(() => {
        Linking.openURL(url);
    });

    return (
        <Pressable onPress={onPress}>
            <Text style={styles.link}>{text}</Text>
        </Pressable>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View>
        <Text style={styles.header}>Le site de la FFFD</Text>
        <Text>Les règles de l'ultimate y sont disponibles en français</Text>
        <Link url="https://www.ff-flyingdisc.fr/les-regles-du-jeu/" text="Accéder aux règles" />
      </View>
      <View>
        <Text style={styles.header}>Disque Tu Sais</Text>
        <Text>Un jeu pour apprendre les règles édité par Alexandre Simonin (aka Pablo) pour aider les jeunes à apprendre les règles.</Text>
        <Link url="https://disquetusais.glideapp.io/" text="Plus d'infos" />
      </View>
      <View>
        <Text style={styles.header}>Les accréditations de la WFDF</Text>
        <Text>Les accréditations sont nécessaires pour jouer dans certaines équipes (ex : équipes de France). Elles sont aussi un super outil pour apprendre les règles !</Text>
        <Link url="https://rules.wfdf.org/accreditation" text="Voir les questionnaires"/>
      </View>
      {Platform.OS === 'android' && (
        <View>
          <Text style={styles.header}>Règles Ultimate Frisbee WFDF21</Text>
          <Text>Une application Android réalisée par Amaury Barral pour lire les règles (en anglais)</Text>
          <Link url="https://play.google.com/store/apps/details?id=frisbee.rules21" text="Télécharger l'app" />
        </View>
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  header: {
    fontSize: theme.FONT_SIZE_L,
  },
  link: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: theme.FONT_SIZE_M,
    color: theme.MAIN_COLOR,
  },
});
