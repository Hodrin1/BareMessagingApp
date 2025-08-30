import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, PAGE_NAME as HomeTitle } from '../screens/home';
import { LoginScreen, PAGE_NAME as LoginTitle } from '../auth/screens/login';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName={LoginTitle}>
      <Stack.Screen
        name={HomeTitle}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={LoginTitle}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
