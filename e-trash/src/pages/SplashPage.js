import React from "react";
import { StyleSheet, View } from "react-native";

const ChargeScreen = () => {
  <View style={styles.body}>
    <Image
      source={require('@assets/logo.png')}
      style={styles.splash}
    />
  </View>
}

const styles = StyleSheet.create({
  body: {
    background: "#ededed",
  },
  splash:{
    display: flex,
    flexDirection: "row",
    alignItems: "center",
  }
})

export default ChargeScreen;