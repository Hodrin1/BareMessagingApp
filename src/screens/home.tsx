import { Text, View, StyleSheet } from 'react-native';

export const PAGE_NAME = 'Home';

export function HomeScreen() {
  return (
    <View style={styles.cointainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
