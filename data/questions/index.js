import fr from './fr';
import en from './en';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getQuestions() {
  switch (await AsyncStorage.getItem('language')) {
    case 'fr':
      return fr;
    case 'en':
      return en;
    default:
      return fr;
  }
}

export default getQuestions;
