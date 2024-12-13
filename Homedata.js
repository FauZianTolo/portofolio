import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

const Homedata = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/04/06/52/mountain-970704_640.jpg' }}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.5 }} // Transparansi gambar latar belakang
      >
        <View style={styles.header}>
          <FontAwesomeIcon icon={faTree} size={30} color="#fff" />
          <Text style={styles.headerText}>Selamat Datang</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Gambar di Sela-sela */}
          <Image
            source={{ uri: 'https://www.suaranusantara.co/wp-content/uploads/2022/01/Picture2-scaled.jpg' }}
            style={styles.image}
          />

          {/* Pendahuluan Card */}
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Pendahuluan</Text>
              <Text style={styles.paragraph}>
                Ruang Terbuka Hijau (RTH) adalah elemen penting dalam tata kota yang berfungsi untuk meningkatkan
                kualitas lingkungan, memberikan tempat rekreasi, dan menjaga keseimbangan ekosistem perkotaan.
              </Text>
            </Card.Content>
          </Card>

          {/* Gambar di Sela-sela */}
          <Image
            source={{ uri: 'https://teraspers.uajy.ac.id/wp-content/uploads/2021/10/rthp-surokarsan-wirogunan.jpg' }}
            style={styles.image}
          />

          {/* Tentang RTH Card */}
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Tentang RTH</Text>
              <Text style={styles.paragraph}>
                RTH adalah area atau jalur dalam kota atau wilayah yang digunakan untuk penghijauan.
                Fungsi utamanya meliputi pengaturan iklim mikro, estetika, hingga peningkatan kualitas udara.
              </Text>
            </Card.Content>
          </Card>

          {/* Gambar di Sela-sela */}
          <Image
            source={{ uri: 'https://teraspers.uajy.ac.id/wp-content/uploads/2021/10/rthp-brontokusuman-1.jpg' }}
            style={styles.image}
          />

          {/* Kelebihan RTH Card */}
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Kelebihan Ruang Terbuka Hijau</Text>
              <View style={styles.listContainer}>
                <Text style={styles.listItem}>🌱 Meningkatkan kualitas udara dan mengurangi polusi.</Text>
                <Text style={styles.listItem}>🌳 Menyediakan tempat rekreasi dan olahraga.</Text>
                <Text style={styles.listItem}>🌼 Menambah keindahan kota dengan estetika hijau.</Text>
                <Text style={styles.listItem}>🌏 Membantu pengendalian banjir dengan serapan air alami.</Text>
                <Text style={styles.listItem}>🌿 Mendukung keberlangsungan ekosistem perkotaan.</Text>
              </View>
            </Card.Content>
          </Card>

          {/* Gambar di Sela-sela */}
          <Image
            source={{ uri: 'https://lingkunganhidup.jogjakota.go.id/resources/img/article/20170721140112.jpg' }}
            style={styles.image}
          />

          {/* Footer Card */}
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.footerText}>Mari jaga dan kembangkan RTH untuk masa depan yang lebih hijau 🌳</Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Pastikan gambar mencakup seluruh layar
  },
  scrollView: {
    paddingTop: 100, // Ensure space for the fixed header
    paddingHorizontal: 10,
  },
  header: {
    position: 'absolute', // Make the header fixed at the top
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(76, 175, 80, 0.8)', // Transparansi untuk background header
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 1, // Ensure it's on top of other content
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  headerText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparansi untuk kartu
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF5722',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  listContainer: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  footerText: {
    fontSize: 18,
    color: '#00796B',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginVertical: 10,
  },
});

export default Homedata;
