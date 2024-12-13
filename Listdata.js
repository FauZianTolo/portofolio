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
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree, faTrash, faSync, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const Listdata = () => {
  const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = () => {
    setLoading(true);
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        setDataUser(json);
        setFilteredData(json);
      })
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

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredData(dataUser);
    } else {
      const filtered = dataUser.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>RTH di Kota Jogja</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama RTH..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          onRefresh={refreshPage}
          refreshing={refresh}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>

              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.cardImage}
                  source={{ uri: item.image_url }}// Increased width and height
                />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.detail}>Rating: {item.rating}</Text>
                <Text style={styles.detail}>Alamat: {item.address}</Text>
                <Text style={styles.detail}>
                  Jam Operasional: {item.open} - {item.close}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
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
              </View>
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
    backgroundColor: 'white', // Warna latar belakang biru muda
  },
  header: {
    backgroundColor: '#4CAF50', // Warna hijau tetap
    paddingVertical: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000', // Menambahkan efek bayangan pada teks
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Putih dengan sedikit bayangan
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 30, // Membuat sudut lebih melengkung
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
    color: '#4CAF50', // Ikon dengan warna hijau
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#4CAF50', // Garis bawah berwarna hijau
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4CAF50', // Warna loader hijau
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Transparansi lebih pas dan tidak terlalu mencolok
    borderRadius: 15, // Sudut lebih melengkung
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9, // Bayangan lebih lembut
    shadowRadius: 10,
    overflow: 'hidden', // Agar gambar tidak keluar dari batas
  },
  cardImage: {
    width: '100%',
    height: 200, // Menambah jarak antara gambar dan informasi
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 0, // Memberi jarak antara gambar dan konten bawah

  },
  info: {
    padding: 15,
    backgroundColor: '#F1F8E9', // Background info dengan warna lembut
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32', // Warna nama lebih segar
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: '#555', // Warna detail lebih gelap untuk kontras
    marginBottom: 0,
  },
  buttonContainer: {
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F1F8E9',
    padding: 15,
  },
  deleteButton: {
    backgroundColor: '#D32F2F', // Warna merah cerah untuk delete
    padding: 10,
    borderRadius: 50,
    elevation: 3,
    left: 5,
  },
  mapButton: {
    backgroundColor: '#0288D1', // Warna biru untuk map
    padding: 10,
    borderRadius: 50,
    elevation: 3,
    right: 5,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50', // Warna hijau cerah untuk FAB
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
