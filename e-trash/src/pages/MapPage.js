import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

const MapPage = () => {
  // function handleNavigateToDetails() {
  //   navigation.navigate('Details');
  // }

  return(
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -18.9004394,
          longitude: -41.9692379,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
        style={styles.mapStyle}
      >
        <Marker 
          icon={mapMarkerImg}
          calloutAnchor={{ x: 2.7, y: 0.8 }}
          coordinate={{ 
            latitude: -18.9004394,
            longitude: -41.9692379,
          }}
        >
          <Callout tooltip={true}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Depósito encontrado!</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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