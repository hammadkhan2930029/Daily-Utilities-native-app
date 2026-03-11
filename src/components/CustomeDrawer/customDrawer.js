import React, { useRef, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Image } from "react-native";
import { useDrawer } from "./drawerContext";
import { AppImages } from "../../constant/appImages";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const { width } = Dimensions.get("window");

export const CustomDrawer = () => {
  const navigation = useNavigation()
  const { isOpen, closeDrawer } = useDrawer();
  const translateX = useRef(new Animated.Value(-width)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -width,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setVisible(false); // ✅ close hone k baad hi remove hoga
      });
    }
  }, [isOpen]);

  if (!visible) return null;
  //----------------------------------------------------
  const handleNavigations = (screenName) => {
    closeDrawer()
    setTimeout(() => {
      navigation.navigate(screenName)

    }, 300);

  }

  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Overlay background */}
      <Animated.View
        style={[styles.overlay, { opacity: overlayOpacity }]}
        pointerEvents={isOpen ? "auto" : "none"}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={closeDrawer}
        />
      </Animated.View>


      {/* Drawer */}

      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <View style={styles.menuAndIcons}>
          <View>
            <View style={styles.logoView}>

              <Image source={AppImages.logo1} style={styles.drawerLogo} />
            </View>

            <TouchableOpacity style={styles.item} onPress={() => handleNavigations('HomeStack')}>
              <View style={styles.item2}>
                <MaterialIcons name='home' size={24} color="#004a80" />
                <Text style={styles.itemText}>Home</Text>
              </View>
              <MaterialIcons name='keyboard-arrow-right' size={24} color="#909090" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => handleNavigations('history')}>
              <View style={styles.item2}>
                <MaterialIcons name='history' size={24} color="#004a80" />
                <Text style={styles.itemText}>History</Text>
              </View>
              <MaterialIcons name='keyboard-arrow-right' size={24} color="#909090" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => handleNavigations('Developers')}>
              <View style={styles.item2}>
                <MaterialIcons name='code' size={24} color="#004a80" />
                <Text style={styles.itemText}>Developer</Text>
              </View>
              <MaterialIcons name='keyboard-arrow-right' size={24} color="#909090" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => handleNavigations('Disclaimer')}>
              <View style={styles.item2}>
                <MaterialIcons name='warning-amber' size={24} color="#004a80" />
                <Text style={styles.itemText}>Disclaimer</Text>
              </View>
              <MaterialIcons name='keyboard-arrow-right' size={24} color="#909090" />
            </TouchableOpacity>

          </View>
          <View style={styles.socailIcons}>
            <TouchableOpacity>
              <Ionicons name='logo-facebook' size={24} color="#000" />

            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='logo-twitter' size={24} color="#000" />

            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='logo-linkedin' size={24} color="#000" />

            </TouchableOpacity>
          </View>
        </View>


      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  drawer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // elevation: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  item2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  menuAndIcons: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5

  },

  itemText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 3
  },
  // --- Updated Styles ---
  logoView: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  drawerLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  socailIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
