import { Text, TextInput, Button } from 'react-native';
import { MainView } from '../../components/main-view';

export const PAGE_NAME = 'Login';

export function LoginScreen() {
  return (
    <MainView>
      <Text>Login Screen</Text>
      <TextInput placeholder='Username' />
      <TextInput placeholder='Password' />
      <Button title='Login' onPress={() => console.log('login')} />
    </MainView>
  );
}
