import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

const Header = ({navigation}) => {  
  let navigation = useNavigation();

  function handleNavigateToHomepage() {
    navigation.navigate('Homepage');
  }

  return(
    <View style={styles.container}>
      <BorderlessButton onPress={() => handleNavigateToHomepage}>
        <Image 
          source={require('../../../assets/logo.png')}
        />
      </BorderlessButton>
      <BorderlessButton onPress={() => goBack()}> 
        <AntDesign name="left" size={24} color="black" />
      </BorderlessButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfbf8',
    width: 100,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoStyle: {
    width: 55,
    height: 24
  }
})

export default Header;