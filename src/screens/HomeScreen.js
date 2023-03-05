import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <Text style={styles.incentive}>{I18n.t('homeScreen.incentive', { count: questions.length })}</Text>
      <View style={styles.buttonsArea}>
        <Button
          containerStyle={styles.button}
          titleStyle={styles.mainButtonText}
          title={I18n.t('homeScreen.menu.play')}
          onPress={() => props.navigation.navigate('OptionsScreen')}
        />
        <Button
          containerStyle={styles.button}
          title={I18n.t('homeScreen.menu.history')}
          onPress={() => props.navigation.navigate('HistoryScreen')}
        />
        <Button
          containerStyle={styles.button}
          title={I18n.t('homeScreen.menu.rules')}
          onPress={() => props.navigation.navigate('RulesScreen')}
        />
      </View>
      <View style={styles.infoArea}>
        <Pressable onPress={() => props.navigation.navigate('AboutScreen')}>
          <MaterialCommunityIcons name="information-outline" style={styles.icon} />
        </Pressable>
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
  incentive: {
    marginBottom: 16,
    fontStyle: 'italic',
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
