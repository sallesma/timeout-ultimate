import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../utils/theme.js';
import questions from '../../data/questions';
import logo from '../../assets/icon.png';
import I18n from '../utils/i18n';

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.title}>{I18n.t('homeScreen.appName')}</Text>
      <Text style={styles.subtitle}>
        <Text style={styles.emphasis}>{questions.length}</Text>
        {I18n.t('homeScreen.subtitle')}
      </Text>
      <View style={styles.buttonsArea}>
        <Link href="/options" asChild>
          <Button
            containerStyle={styles.button}
            titleStyle={styles.mainButtonText}
            title={I18n.t('homeScreen.menu.play')}
          />
        </Link>
        <Link href="/history" asChild>
          <Button containerStyle={styles.button} title={I18n.t('homeScreen.menu.history')} />
        </Link>
        <Link href="/rules" asChild>
          <Button containerStyle={styles.button} title={I18n.t('homeScreen.menu.rules')} />
        </Link>
      </View>
      <View style={styles.infoArea}>
        <Link href="/abouta">
          <MaterialCommunityIcons name="information-outline" style={styles.icon} />
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
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
    marginHorizontal: 16,
  },
  button: {
    marginBottom: 16,
    borderRadius: 8,
  },
  mainButtonText: {
    fontSize: theme.FONT_SIZE_XL,
  },
  infoArea: {
    marginHorizontal: 8,
    alignItems: 'flex-end',
  },
  icon: {
    fontSize: theme.FONT_SIZE_XXL,
    padding: 8,
  },
});
