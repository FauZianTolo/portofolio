/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import React, { useState } from 'react';
import WelcomeScreen from './App'; // Import WelcomeScreen
import CrudMahasiswaNav from './CrudMahasiswaNav'; // Import CrudMahasiswaNav

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Welcome'); // State untuk melacak layar aktif

  // Render layar berdasarkan state `currentScreen`
  const renderScreen = () => {
    if (currentScreen === 'Welcome') {
      return <WelcomeScreen navigateToCrud={() => setCurrentScreen('CrudMahasiswa')} />;
    }
    if (currentScreen === 'CrudMahasiswa') {
      return <CrudMahasiswaNav navigateBack={() => setCurrentScreen('Welcome')} />;
    }
    return null;
  };

  return renderScreen();
};

// Daftarkan komponen utama ke dalam AppRegistry
AppRegistry.registerComponent(appName, () => App);
