import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

import HomeScreen from './src/screens/HomeScreen.js';
import SampleQuestionScreen from './src/screens/SampleQuestionScreen.js';
import QuizzScreen from './src/screens/QuizzScreen.js';
import HistoryScreen from './src/screens/HistoryScreen.js';
import AboutScreen from './src/screens/AboutScreen.js';
import LinksScreen from './src/screens/LinksScreen.js';

import theme from './src/utils/theme.js';

const reactNativeElementsTheme = {
  colors: {
    primary: theme.MAIN_COLOR
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={reactNativeElementsTheme}>
        <NavigationContainer
          fallback={<ActivityIndicator animating color="#" style={{ top: '45%' }} size="large" />}
        >
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Ultimate rules quizz' }} />
            <Stack.Screen name="SampleQuestionScreen" component={SampleQuestionScreen} options={{ title: 'Question' }} />
            <Stack.Screen name="QuizzScreen" component={QuizzScreen} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ title: 'Historique' }} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'À propos' }} />
            <Stack.Screen name="LinksScreen" component={LinksScreen} options={{ title: 'Liens utiles' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
