import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from '../utils/theme.js';
import questions from '../../data/questions';
import logo from '../../assets/icon.png';
import I18n from '../utils/i18n';

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.title}>{I18n.t('homeScreen.appName')}</Text>
      <Text style={styles.subtitle}>
        <Text style={styles.emphasis}>{questions.length}</Text>
        {I18n.t('homeScreen.subtitle')}
      </Text>
      <View style={styles.buttonsArea}>
        <Button
          style={styles.button}
          mode="contained"
          labelStyle={[styles.buttonLabel, styles.mainButtonLabel]}
          onPress={() => props.navigation.navigate('OptionsScreen')}
        >
          {I18n.t('homeScreen.menu.play')}
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => props.navigation.navigate('HistoryScreen')}
        >
          {I18n.t('homeScreen.menu.history')}
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => props.navigation.navigate('RulesScreen')}
        >
          {I18n.t('homeScreen.menu.rules')}
        </Button>
      </View>
      <View style={styles.infoArea}>
        <IconButton
          icon="information-outline"
          size={theme.FONT_SIZE_XXL}
          onPress={() => props.navigation.navigate('AboutScreen')}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    alignItems: 'center',
    height: 100,
    marginVertical: 8,
  },
  logo: {
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 50, // round
  },
  title: {
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_XXL,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_L,
    textAlign: 'center',
  },
  emphasis: {
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_XL,
    fontWeight: 'bold',
  },
  buttonsArea: {
    gap: 8,
    marginTop: 8,
    marginHorizontal: 16,
  },
  button: {
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: theme.FONT_SIZE_L,
  },
  mainButtonLabel: {
    padding: 16,
    fontSize: theme.FONT_SIZE_XL,
  },
  infoArea: {
    marginHorizontal: 8,
    alignItems: 'flex-end',
  },
});
