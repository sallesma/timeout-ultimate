import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/Home.js';
import SampleQuestionScreen from './src/screens/SampleQuestion.js';
import QuizzScreen from './src/screens/Quizz.js';
import HistoryScreen from './src/screens/History.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Ultimate rules quizz' }} />
          <Stack.Screen name="SampleQuestionScreen" component={SampleQuestionScreen} options={{ title: 'Question' }} />
          <Stack.Screen name="QuizzScreen" component={QuizzScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ title: 'Historique' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
