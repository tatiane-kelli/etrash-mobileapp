import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {  
  return(
    <View style={styles.container}>
      <Text>Funciona</Text>
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
  }
})

export default Header;