import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

const Header = ({navigation}) => {  
  return(
    <View style={styles.container}>
      <BorderlessButton onPress={() => navigation.navigate("Home")}> 
        <Image 
          source={require('../../assets/logo-header.png')}
          style={styles.logoStyle}
        />
      </BorderlessButton>
      <BorderlessButton onPress={() => goBack()} style={styles.buttonStyle}>
        <AntDesign name="arrowleft" size={40} color="#121413" />
      </BorderlessButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfbf8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  logoStyle: {
    width: 150,
    height: 100,
    padding: 20
  },
  buttonStyle: {
    padding: 20,
  }
})

export default Header;