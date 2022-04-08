import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Header = () => {  
  return(
    <View style={styles.container}>
      <Image 
        source={require('@assets/logo.png')}
      />
      <Image 
        source={require('@assets/menu-icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fbfbf8',
    borderBottomWidth: 1,
    borderColor: '#DDE3F0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Header;