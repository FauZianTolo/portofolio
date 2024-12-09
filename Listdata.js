import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree, faChevronRight, faTrash, faSync, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Listdata = () => {
  const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setDataUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshPage = () => {
    setRefresh(true);
    fetchData();
    setRefresh(false);
  };

  const deleteData = (id) => {
    fetch(`${jsonUrl}/${id}`, { method: 'DELETE' })
      .then(() => {
        Alert.alert('Sukses', 'Data berhasil dihapus!');
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  const openInMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('Error', 'Tidak dapat membuka Google Maps.')
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>RTH di Kota Jogja</Text>
      </View>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={dataUser}
          onRefresh={refreshPage}
          refreshing={refresh}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <View style={styles.avatar}>
                <FontAwesomeIcon icon={faTree} size={50} color="#4CAF50" />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>
                  {item.name}
                </Text>
                <Text style={styles.detail}>Rating: {item.rating}</Text>
                <Text style={styles.detail}>Alamat: {item.address}</Text>
                <Text style={styles.detail}>Jam Operasional: {item.open} {item.close} </Text>
              </View>
              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => openInMaps(item.latitude, item.longitude)}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() =>
                  Alert.alert('Hapus Data', 'Yakin ingin menghapus data ini?', [
                    { text: 'Tidak', onPress: () => console.log('Tidak') },
                    { text: 'Ya', onPress: () => deleteData(item.id) },
                  ])
                }
              >
                <FontAwesomeIcon icon={faTrash} size={20} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}

      {/* FAB Button for Refresh */}
      <TouchableOpacity style={styles.fab} onPress={refreshPage}>
        <FontAwesomeIcon icon={faSync} size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Listdata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4CAF50',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    marginRight: 15,
    backgroundColor: '#e8f5e9',
    padding: 12,
    borderRadius: 50,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  deleteButton: {
    backgroundColor: '#E63946',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
    marginLeft: 10,
  },
  mapButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
});
