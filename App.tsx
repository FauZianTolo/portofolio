import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

const WelcomeScreen = ({ navigateToCrud }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const iconScale = useRef(new Animated.Value(1)).current;

  // State untuk menangani login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Untuk login status

  // Mulai animasi warna
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();

    // Animasi besar-kecil ikon
    Animated.loop(
      Animated.sequence([
        Animated.timing(iconScale, {
          toValue: 1.2,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(iconScale, {
          toValue: 1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animatedValue, iconScale]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#4caf50', '#8bc34a', '#2e7d32', '#388e3c', '#4caf50'],
  });

  const handleLogin = () => {
    if (email && password) {
      // Implementasikan logika login disini
      console.log('Login Successful');
      setIsLoggedIn(true);
    }
  };

  const handleForgotPassword = () => {
    // Implementasikan logika "Lupa Password"
    console.log('Lupa password');
  };

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle="light-content" backgroundColor="#2e7d32" />
      <Text style={styles.appName}>SPROUT</Text>
      <Text style={styles.tagline}>Spatial Public RTH Optimization and Utilization Tool</Text>

      <View style={styles.iconContainer}>
        <Animated.View style={{ transform: [{ scale: iconScale }] }}>
          <FontAwesomeIcon icon={faTree} size={100} color="#ffffff" />
        </Animated.View>
      </View>

      <Text style={styles.welcomeText}>Selamat Datang</Text>
      <Text style={styles.subtitle}>Eksplorasi Persebaran RTH Kota Yogyakarta</Text>

      {isLoggedIn ? (
        // Jika sudah login, tampilkan pesan berhasil login
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Anda berhasil login!</Text>
          <TouchableOpacity style={styles.button} onPress={navigateToCrud}>
            <Text style={styles.buttonText}>Masuk ke Dashboard</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Form Login jika belum login
        <View style={styles.loginForm}>
          <Text style={styles.loginInfo}>Silakan login untuk melanjutkan ke halaman eksplorasi persebaran RTH di Yogyakarta.</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Lupa Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.forgotPassword}>Belum Punya Akun? Registrasi</Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 14,
    color: '#c8e6c9',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#e6ee9c',
    textAlign: 'center',
    marginBottom: 50,
  },
  loginForm: {
    width: '80%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  successContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#388e3c',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20, // Menambahkan jarak horizontal pada teks
  },

  forgotPassword: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default WelcomeScreen;
