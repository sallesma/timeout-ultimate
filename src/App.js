import { ActivityIndicator } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import Toast, { BaseToast } from 'react-native-toast-message';

import HomeScreen from './screens/HomeScreen.js';
import OptionsScreen from './screens/OptionsScreen.js';
import QuizzScreen from './screens/QuizzScreen.js';
import HistoryScreen from './screens/HistoryScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import RulesScreen from './screens/RulesScreen.js';

import theme from './utils/theme.js';

const reactNativeElementsTheme = {
  colors: {
    primary: theme.MAIN_COLOR,
  },
};

const reactNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.MAIN_COLOR_LIGHT,
    primary: theme.MAIN_COLOR_LIGHT,
    card: theme.MAIN_COLOR,
    text: theme.MAIN_COLOR_LIGHT,
  },
};

const Stack = createNativeStackNavigator();

const toastConfig = {
  info: (props) => <BaseToast {...props} style={{ borderLeftColor: 'transparent' }} />,
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={reactNativeElementsTheme}>
        <NavigationContainer
          theme={reactNavigationTheme}
          fallback={<ActivityIndicator animating color={theme.MAIN_COLOR} style={{ top: '45%' }} size="large" />}
        >
          <Stack.Navigator screenOptions={{ headerBackTitle: 'Retour' }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ title: 'Timeout Ultimate', headerShown: false }}
            />
            <Stack.Screen name="OptionsScreen" component={OptionsScreen} options={{ title: 'Démarrer mon quizz' }} />
            <Stack.Screen name="QuizzScreen" component={QuizzScreen} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ title: 'Historique' }} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'À propos' }} />
            <Stack.Screen name="RulesScreen" component={RulesScreen} options={{ title: 'Règlement' }} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast config={toastConfig} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
