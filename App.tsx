/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStack } from './src/navigation/root-stack';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootStack />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
