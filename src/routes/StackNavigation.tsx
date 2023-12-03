import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen} from '../screens';

export type RootStackParams = {
  Home: undefined;
  Details: undefined;
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
