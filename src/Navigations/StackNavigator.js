import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoldPriceHistory } from '../Screens/DetailsScreen';
import { Main } from '../Screens/main';
import { CustomDrawer } from '../components/CustomeDrawer/customDrawer';
import { Disclaimer } from '../Screens/Disclaimer';
import { Developers } from '../Screens/Developers';
import { History } from '../Screens/history';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>


      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="Details" component={GoldPriceHistory} />
      <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
      <Stack.Screen name="Disclaimer" component={Disclaimer} />
      <Stack.Screen name="Developers" component={Developers} />
      
    </Stack.Navigator>
  );
}
