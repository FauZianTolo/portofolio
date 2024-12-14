import React from 'react';
import { Text, View } from 'react-native';
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
  return <Homedata />;
}

function MapsScreen() {
  return <WebView source={webmap} />;
}

function SettingsScreen() {
  return <Listdata />;
}

function EditdataScreen() {
  return <Editdata />;
}

function WebScreen() {
  return (
    <WebView
      source={{ uri: 'https://jogjapolitan.harianjogja.com/read/2024/02/02/510/1163565/pemkot-jogja-akan-bangun-4-ruang-terbuka-hijau-pada-2024-ini-lokasinya' }}
      style={{ flex: 1 }}
    />
  );
}

function ProfilScreen() {
  return <Profildata />;
}

const Tab = createBottomTabNavigator();

const CrudMahasiswaNav = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHouse} color={color} size={20} />,
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faMap} color={color} size={20} />,
          }}
        />
        <Tab.Screen
          name="List"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faTree} color={color} size={20} />,
          }}
        />
        <Tab.Screen
          name="Edit"
          component={EditdataScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faEdit} color={color} size={20} />,
          }}
        />
        <Tab.Screen
          name="Berita Ruang Terbuka Hijau"
          component={WebScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faNewspaper} color={color} size={20} />,
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faUser} color={color} size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default CrudMahasiswaNav;
