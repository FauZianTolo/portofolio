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
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [kelas, setKelas] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');

  const submit = () => {
    const data = {
      first_name,
      last_name,
      email,
      kelas,
      gender,
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
        setFirstName('');
        setLastName('');
        setEmail('');
        setKelas('');
        setGender('');
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
              placeholder="Nama Depan"
              placeholderTextColor="#ccc"
              value={first_name}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Nama Belakang"
              placeholderTextColor="#ccc"
              value={last_name}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Kelas"
              placeholderTextColor="#ccc"
              value={kelas}
              onChangeText={setKelas}
            />
            <TextInput
              style={styles.input}
              placeholder="Jenis Kelamin"
              placeholderTextColor="#ccc"
              value={gender}
              onChangeText={setGender}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
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
