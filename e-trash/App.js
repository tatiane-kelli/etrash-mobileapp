import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { 
  useFonts, 
  Lato_100Thin,
  Lato_400Regular,
  Lato_900Black
} from '@expo-google-fonts/lato';
//import Routes from './src/routes/Stack';
//import MapPage from "./src/pages/MapPage";
import StorageDetails from "./src/pages/storage"

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_400Regular,
    Lato_900Black
  });

  if(!fontsLoaded) {
    return null
  } else {
    return (
      <>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent"/>
          <StorageDetails/>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
