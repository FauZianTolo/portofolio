import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle, faUserGraduate, faUserPen, faMap } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Createdata from './Createdata';
import Listdata from './Listdata';
import Editdata from './Editdata';
import Mapdata from './Mapdata';
import Mahasiswa from './Mahasiswa';

function HomeScreen() {
  return (
    <Createdata/>
  );
}
function MapScreen() {
  return (
    <Mapdata/>
  );
}
function SettingsScreen() {
  return (
   <Listdata/>
  );
}

function EditdataScreen() {
  return (
   <Editdata/>
  );
}
function WebScreen() {
  return (
    <WebView
      source={{ uri: 'https://github.com/FauZianTolo' }}
      style={{ flex: 1 }} // Optional: Makes WebView take up the full screen
    />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Tambah"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faPlusCircle} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faMap} color={color} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="Data Mahasiswa"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUserGraduate} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
                  name="Edit"
                  component={EditdataScreen}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                      <FontAwesomeIcon icon={faUserPen} color={color} size={20} />
                    ),
                  }}
                />
        <Tab.Screen
                  name="Github"
                  component={WebScreen}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <FontAwesomeIcon icon={faGithub} color={color} size={20} />
                    ),
                  }}
                />
      </Tab.Navigator>
    </NavigationContainer>
  );
}