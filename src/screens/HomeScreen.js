import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from '../utils/theme.js';
import i18n from '../utils/i18n';
import questions from '../../data/questions_EN_US';
import logo from '../../assets/icon.png';

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <Text style={styles.title}>Timeout Ultimate</Text>
      <Text style={styles.welcomeText}>
        <Text style={styles.emphasis}>{questions.length}</Text> questions t'attendent pour apprendre les règles de
        l'ultimate !
      </Text>
      <View style={styles.buttonsArea}>
        <Button
          containerStyle={styles.button}
          titleStyle={styles.mainButtonText}
          title="Play" //{i18n.t('buttons.play')}
          onPress={() => props.navigation.navigate('OptionsScreen')}
        />
        <Button
          containerStyle={styles.button}
          title="History" //{i18n.t('buttons.history')}
          onPress={() => props.navigation.navigate('HistoryScreen')}
        />
        <Button
          containerStyle={styles.button}
          title="Rules" //{i18n.t('buttons.rules')}
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
  welcomeText: {
    fontSize: theme.FONT_SIZE_L,
    marginBottom: 32,
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
