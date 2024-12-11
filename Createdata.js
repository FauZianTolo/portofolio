import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const Createdata = () => {
  const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState('');
  const [close, setClose] = useState('');

  const submit = () => {
    const data = {
      name,
      rating,
      address,
      open,
      close,
    };
    fetch(jsonUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Alert.alert('Sukses', 'Data berhasil disimpan!');
        setName('');
        setRating('');
        setAddress('');
        setOpen('');
        setClose('');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Tambah Data Mahasiswa</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Ruang Terbuka Hijau"
              placeholderTextColor="#ccc"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Rating"
              placeholderTextColor="#ccc"
              value={rating}
              onChangeText={setRating}
            />
            <TextInput
              style={styles.input}
              placeholder="Alamat"
              placeholderTextColor="#ccc"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.input}
              placeholder="Jam Buka"
              placeholderTextColor="#ccc"
              value={open}
              onChangeText={setOpen}
            />
            <TextInput
              style={styles.input}
              placeholder="Jam Tutup"
              placeholderTextColor="#ccc"
              value={close}
              onChangeText={setClose}
            />
            <TouchableOpacity style={styles.button} onPress={submit}>
              <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Createdata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  header: {
    backgroundColor: '#4CAF50', // Green color for header
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
  scrollView: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#4CAF50', // Green color for button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
