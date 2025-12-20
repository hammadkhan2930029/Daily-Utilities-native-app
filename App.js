import React, { useEffect, useState } from 'react';
import AppNavigator from './src/Navigations/AppNavigator';
import { StatusBar, StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { Alert, Linking } from 'react-native';

export default function App() {
  //---------------------------------------------------------
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('FCM token :', token);
  };
  //---------------------------------------------------------

  const requestFCMPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('FCM Permission granted.');
      getToken();
    } else {
      console.log('FCM Permission denied.');
    }
  };
  //------------------------------------------------------------
  const requestPermissionAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification Permission Granted');
    } else {
      console.log('Notification Permission Denied');
    }
  };
  //-------------------------------------------------------

  useEffect(() => {
    requestPermissionAndroid();
    requestFCMPermission();
    handleNotificationClick();
  }, []);

  //-----------------------------------------------------------

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);
  //-------------------------------------------------------------
  const handleNotificationClick = async () => {
    // Background / App closed se open hui notification
    const initialNotification = await messaging().getInitialNotification();
    if (initialNotification) {
      const url = initialNotification.data?.link;
      if (url) Linking.openURL(url);
    }

    // App background me notification click
    messaging().onNotificationOpenedApp(remoteMessage => {
      const url = remoteMessage.data?.link;
      if (url) Linking.openURL(url);
    });

    // App foreground me notification show & click
    messaging().onMessage(remoteMessage => {
      const url = remoteMessage.data?.link;
      Alert.alert(
        remoteMessage.notification?.title || 'Notification',
        remoteMessage.notification?.body || '',
        [
          { text: 'Update', onPress: () => url && Linking.openURL(url) },
          { text: 'Close', style: 'cancel' },
        ],
      );
    });
  };

  return (
    <ToastProvider
      placement="bottom"
      duration={4000}
      animationType="slide-in"
      offset={30}
      swipeEnabled={true}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      <AppNavigator />
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
