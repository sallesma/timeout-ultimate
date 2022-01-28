import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../utils/theme.js';
import questions from '../../data/questions';
import logo from '../../assets/icon.png';

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.title}>Timeout Ultimate</Text>
      <Text style={styles.welcomeText}><Text style={styles.emphasis}>{questions.length}</Text> questions t'attendent pour apprendre les règles de l'ultimate !</Text>
      <View>
        <Button containerStyle={styles.button} titleStyle={styles.mainButtonText} title="Jouer" onPress={() => props.navigation.navigate('OptionsScreen')} />
        <Button containerStyle={styles.button} title="Historique" onPress={() => props.navigation.navigate('HistoryScreen')} />
        <Button containerStyle={styles.button} title="Règlement" onPress={() => props.navigation.navigate('RulesScreen')} />
      </View>
      <Pressable onPress={() => props.navigation.navigate('AboutScreen')} style={styles.floatingInfo}>
        <MaterialCommunityIcons name="information-outline" style={styles.icon} />
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 64,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    height: 110,
    marginVertical: 8,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 1000, // round
  },
  title: {
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_XXL,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: theme.FONT_SIZE_L,
    marginBottom: 64,
    textAlign: 'center',
  },
  emphasis: {
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_XL,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 16,
    borderRadius: 8,
  },
  mainButtonText: {
    fontSize: theme.FONT_SIZE_XL,
  },
  floatingInfo: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  icon: {
    fontSize: theme.FONT_SIZE_XXL,
    padding: 8,
  },
});
