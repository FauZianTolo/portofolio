import React from 'react';
import Datamahasiswa from './data/mahasiswa.json';
import { FlatList, Text, View, TouchableOpacity, Linking, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

const getClassGradientColors = (className) => {
  switch (className) {
    case 'A':
      return ['#4DA0B0', '#D39D38']; // Peach to Light Orange
    case 'B':
      return ['#6A82FB', '#FC5C7D']; // Teal to Gold
  }
};

const Mahasiswa = () => {
  return (
    <LinearGradient
      colors={['#FFDEE9', '#B5FFFC']}
      style={styles.mainBackground}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Mahasiswa D4 SIG</Text>
        <FlatList
          data={Datamahasiswa}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.touchable}>
              <LinearGradient
                colors={getClassGradientColors(item.class)}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
              >
                <View style={styles.avatarContainer}>
                  <FontAwesomeIcon
                    icon={faUserGraduate}
                    size={50}
                    color={item.gender === 'male' ? '#4a90e2' : '#ff9a9e'}
                  />
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                  <Text style={styles.gender}>Gender: {item.gender}</Text>
                  <Text style={styles.class}>Class: {item.class}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('google.navigation:q' + item.latitude + ',' + item.longitude)
                    }
                  >
                    <Text style={styles.coordinates}>
                      Location: {item.latitude}, {item.longitude}
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Mahasiswa;

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 20,
    textShadowColor: '#00000050',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  touchable: {
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  avatarContainer: {
    borderRadius: 40,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  gender: {
    fontSize: 14,
    color: '#fdfcfb',
    marginTop: 2,
  },
  class: {
    fontSize: 14,
    color: '#fdfcfb',
    marginTop: 2,
  },
  coordinates: {
    fontSize: 12,
    color: '#FFE7C4',
    marginTop: 4,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
