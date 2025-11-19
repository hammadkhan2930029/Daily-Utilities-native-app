

// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AuthNavigator from './AuthNavigation';
// import BottomTabNavigator from './BottomTabsNavigator';
// import { Splash } from '../Screens/splash';
// import auth from '@react-native-firebase/auth';

// const RootStack = createNativeStackNavigator();

// export default function AppNavigator() {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   useEffect(() => {
// //     const unsubsCribe = auth().onAuthStateChanged(user => {
// //       if (user) {
// //         setIsLoggedIn(true)

// //       } else {
// //         setIsLoggedIn(false)
// //       }
// //       setIsLoading(false)
// //     })
// //     return () => unsubsCribe();
// //   }, [])
// // console.log("is loggin :",isLoggedIn)

 

//   return (
//     <NavigationContainer>
//       <RootStack.Navigator screenOptions={{ headerShown: false }}>
//         {/* {isLoading ? ( */}
//           <RootStack.Screen name="Splash" component={Splash} />
//         {/* ) : isLoggedIn ? ( */}
//           <RootStack.Screen name="MainApp" component={BottomTabNavigator} />
//         {/* ) : ( */}
//           <RootStack.Screen name="Auth" component={AuthNavigator} />
//         {/* )} */}
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabsNavigator';
import { Splash } from '../Screens/splash';

const RootStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Pehle Splash screen */}
        <RootStack.Screen name="Splash" component={Splash} />

        {/* Splash ke baad direct Home (MainApp) */}
        <RootStack.Screen name="MainApp" component={BottomTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

