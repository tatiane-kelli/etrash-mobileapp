import React from "react";
import { StyleSheet, View } from "react-native";

const ChargeScreen = () => {
  <View style={styles.body}>
    <Image
      source={require('../../assets/splash.png')}
      style={styles.splash}
    />
  </View>
}

const styles = StyleSheet.create({
  body: {
    background: "#ededed",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  splash:{
    display: flex,
    flexDirection: "row",
    alignItems: "center",
  }
})

export default ChargeScreen;