import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree, faEdit, faSave, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';

const Createdata = () => {
  const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState('');
  const [close, setClose] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setDataUser(json))
      .catch((error) => console.error(error));
  };

  const handleSubmit = () => {
    const data = { name, rating, address, open, close };
    const url = selectedUser ? `${jsonUrl}/${selectedUser.id}` : jsonUrl;
    const method = selectedUser ? 'PATCH' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert(selectedUser ? 'Data berhasil diperbarui!' : 'Data berhasil ditambahkan!');
        clearForm();
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  const clearForm = () => {
    setName('');
    setRating('');
    setAddress('');
    setOpen('');
    setClose('');
    setSelectedUser(null);
  };

  const selectItem = (item) => {
    setSelectedUser(item);
    setName(item.name);
    setRating(item.rating);
    setAddress(item.address);
    setOpen(item.open);
    setClose(item.close);
  };

  const handleRefresh = () => {
    fetchData();
    clearForm();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: selectedUser ? '#FF9800' : '#4CAF50' }]}>
        <Text style={styles.headerText}>{selectedUser ? 'Edit Data RTH' : 'Tambah Data RTH'}</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ruang Terbuka Hijau"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Rating"
          placeholderTextColor="#aaa"
          value={rating}
          onChangeText={setRating}
        />
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          placeholderTextColor="#aaa"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Jam Buka"
          placeholderTextColor="#aaa"
          value={open}
          onChangeText={setOpen}
        />
        <TextInput
          style={styles.input}
          placeholder="Jam tutup"
          placeholderTextColor="#aaa"
          value={close}
          onChangeText={setClose}
        />
        <TouchableOpacity
          style={[styles.button, selectedUser ? styles.editButton : styles.addButton]}
          onPress={handleSubmit}
        >
          <FontAwesomeIcon icon={selectedUser ? faSave : faPlus} size={16} color="#fff" />
          <Text style={styles.buttonText}>{selectedUser ? 'Simpan' : 'Tambah'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
        <FontAwesomeIcon icon={faSync} size={16} color="#fff" />
      </TouchableOpacity>
      <ScrollView style={styles.listContainer}>
        {dataUser.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.avatar}>
              <FontAwesomeIcon icon={faTree} size={40} color="#4CAF50" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardText}>{item.rating}</Text>
              <Text style={styles.cardText}>{item.address}</Text>
              <Text style={styles.cardText}>{item.open} {item.close}</Text>
            </View>
            <TouchableOpacity onPress={() => selectItem(item)} style={styles.editButtonCard}>
              <FontAwesomeIcon icon={faEdit} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
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
  formContainer: {
    padding: 15,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    elevation: 3,
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  editButton: {
    backgroundColor: '#FF9800',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  refreshButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#2196F3',
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    right: 10,
    elevation: 3,
  },
  listContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
  },
  avatar: {
    backgroundColor: '#e8f5e9',
    padding: 10,
    borderRadius: 50,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardText: {
    color: '#666',
  },
  editButtonCard: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
});

export default Createdata;
