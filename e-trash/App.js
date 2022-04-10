import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { 
  useFonts, 
  Lato_100Thin,
  Lato_400Regular,
  Lato_900Black
} from '@expo-google-fonts/lato';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
