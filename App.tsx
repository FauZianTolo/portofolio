import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WelcomeScreen = ({ navigateToCrud }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const iconScale = useRef(new Animated.Value(1)).current; // Untuk animasi perubahan ukuran ikon

  // Mulai animasi warna
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 10000, // Durasi lebih lama untuk smooth perubahan
        easing: Easing.linear,
        useNativeDriver: false, // Penting untuk properti non-transform
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

  // Interpolasi warna gradasi
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#4caf50', '#8bc34a', '#2e7d32', '#388e3c', '#4caf50'], // Siklus gradasi warna
  });

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

      <TouchableOpacity style={styles.button} onPress={navigateToCrud}>
        <Text style={styles.buttonText}>Mulai Jelajahi</Text>
        <FontAwesomeIcon icon={faArrowRight} size={18} color="#ffffff" style={styles.buttonIcon} />
      </TouchableOpacity>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#388e3c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
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
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default WelcomeScreen;
