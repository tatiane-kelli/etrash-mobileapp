import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import Header from "../components/Header";

const MapPage = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Header />
      </View>
      <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -18.868605,
          longitude: -41.955342,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
        style={styles.mapStyle}
      >
        <Marker 
          icon={ <Ionicons name="location-sharp" size={50} color="#346138" /> }
          calloutAnchor={{ x: 2.7, y: 0.8 }}
          coordinate={{ 
            latitude: -18.8681682,
            longitude: -41.9557001,
          }}
          onPress={() => {
            navigation.navigate("Details")
          }} //navegar para a página de detalhes do depósito
        >
          <Callout tooltip={true}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Depósito encontrado!</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  headerStyle :{
    paddingTop: 20,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 3,
  },
  calloutText: {
    color: '#0a2b06',
    fontSize: 14,
    fontFamily: 'Lato_100Thin',
  }
})

export default MapPage;