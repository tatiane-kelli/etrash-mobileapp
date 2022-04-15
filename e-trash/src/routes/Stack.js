import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapPage from "../pages/MapPage";
import StorageDetails from "../pages/storage";

const Routes = () => {  
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen 
          options={{headerShown: false}}
          name="Homepage" 
          component={MapPage} 
        />
        <Stack.Screen 
          options={{headerShown: false}}
          name="Details" 
          component={StorageDetails} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;