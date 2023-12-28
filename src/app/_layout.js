import { Stack } from 'expo-router';
import { ThemeProvider as ReactNavigationThemeProvider, DefaultTheme } from '@react-navigation/native';
import Toast, { BaseToast } from 'react-native-toast-message';
import { ThemeProvider as ElementsThemeProvider } from 'react-native-elements';

import I18n from '../utils/i18n';
import theme from '../utils/theme.js';

const toastConfig = {
  info: (props) => <BaseToast {...props} style={{ borderLeftColor: 'transparent' }} />,
};

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

export default function RootLayout() {
  return (
    <ElementsThemeProvider theme={reactNativeElementsTheme}>
      <ReactNavigationThemeProvider value={reactNavigationTheme}>
        <Stack screenOptions={{ headerBackTitle: I18n.t('navigation.back') }}>
          <Stack.Screen name="index" options={{ title: I18n.t('navigation.homeScreen'), headerShown: false }} />
          <Stack.Screen name="options" options={{ title: I18n.t('navigation.optionsScreen') }} />
          <Stack.Screen name="quizz" />
          <Stack.Screen name="history" options={{ title: I18n.t('navigation.historyScreen') }} />
          <Stack.Screen name="about" options={{ title: I18n.t('navigation.aboutScreen') }} />
          <Stack.Screen name="rules" options={{ title: I18n.t('navigation.rulesScreen') }} />
        </Stack>
        <Toast config={toastConfig} />
      </ReactNavigationThemeProvider>
    </ElementsThemeProvider>
  );
}
