import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faMap, faUser, faTree, faEdit, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';

import Homedata from './Homedata';
import Listdata from './Listdata';
import Editdata from './Editdata';
import Profildata from './Profildata';

const webmap = require('./peta/map.html');

function HomeScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Homedata />
    </SafeAreaView>
  );
}

function MapsScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <WebView source={webmap} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Listdata />
    </SafeAreaView>
  );
}

function EditdataScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Editdata />
    </SafeAreaView>
  );
}

function WebScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <WebView
        source={{ uri: 'https://jogjapolitan.harianjogja.com/read/2024/02/02/510/1163565/pemkot-jogja-akan-bangun-4-ruang-terbuka-hijau-pada-2024-ini-lokasinya' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

function ProfilScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Profildata />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const CrudMahasiswaNav = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#4CAF50', // Green background color for the tab bar
            position: 'absolute',
            bottom: 0, // Keep the tab bar at the bottom
            left: 0,
            right: 0,
            height: 70, // Tab bar height
            // Remove the borderRadius to make the tab bar square
            shadowColor: '#000', // Shadow for depth effect
            shadowOffset: { width: 5, height: -5 },
            shadowOpacity: 0.3,
            shadowRadius: 15,
            elevation: 10, // Make it float with shadow
            zIndex: 5, // Ensure it's above the content
          },
          tabBarActiveTintColor: '#fff', // Active icon color (white)
          tabBarInactiveTintColor: '#A9D08E', // Inactive icon color (light green)
          tabBarLabelStyle: {
            fontSize: 12, // Smaller label font size
            fontWeight: '600',
            marginBottom: 10, // Space between the icon and label
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon
                icon={faHouse}
                color={color}
                size={focused ? 28 : 20}
                style={styles.iconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon
                icon={faMap}
                color={color}
                size={focused ? 28 : 20}
                style={styles.iconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon
                icon={faTree}
                color={color}
                size={focused ? 28 : 20}
                style={styles.iconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Edit"
          component={EditdataScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon
                icon={faEdit}
                color={color}
                size={focused ? 28 : 20}
                style={styles.iconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={WebScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon
                icon={faNewspaper}
                color={color}
                size={focused ? 28 : 20}
                style={styles.iconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon
                icon={faUser}
                color={color}
                size={focused ? 28 : 20}
                style={styles.iconStyle}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingBottom: 70, // Add padding bottom to prevent overlap with the bottom tab bar
  },
  iconStyle: {
    marginTop: 5, // Add some margin to the icons for better spacing
    transition: 'transform 0.2s ease-in-out', // Add smooth scaling transition
  },
});

export default CrudMahasiswaNav;
