import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import MapPage from "../pages/MapPage";
//import Header from "../components/Header";

const Routes = () => {
  return(
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#F2F3F5' }
      }}>
        <Screen 
          name="Homepage" 
          component={MapPage}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;