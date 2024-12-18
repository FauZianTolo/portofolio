import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'; // Import Animatable

const Homedata = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?cs=srgb&dl=pexels-chris-czermak-1280625-2444403.jpg&fm=jpg' }}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.4 }} // Transparansi gambar latar belakang
      >
        <View style={styles.header}>
          <Animatable.Text
            animation="fadeInDown"
            duration={1500}
            style={styles.headerText}
          >
            Selamat Datang
          </Animatable.Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Gambar di Sela-sela */}
          <Animatable.View animation="zoomIn" duration={1200} delay={500}>
            <Image
              source={{ uri: 'https://www.suaranusantara.co/wp-content/uploads/2022/01/Picture2-scaled.jpg' }}
              style={styles.image}
            />
          </Animatable.View>

          {/* Pendahuluan Card */}
          <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.sectionTitle}>Pendahuluan</Text>
                <Text style={styles.paragraph}>
                  Ruang Terbuka Hijau (RTH) adalah elemen penting dalam tata kota yang berfungsi untuk meningkatkan
                  kualitas lingkungan, memberikan tempat rekreasi, dan menjaga keseimbangan ekosistem perkotaan.
                </Text>
              </Card.Content>
            </Card>
          </Animatable.View>

          {/* Gambar di Sela-sela */}
          <Animatable.View animation="fadeInLeft" duration={1200} delay={800}>
            <Image
              source={{ uri: 'https://teraspers.uajy.ac.id/wp-content/uploads/2021/10/rthp-surokarsan-wirogunan.jpg' }}
              style={styles.image}
            />
          </Animatable.View>

          {/* Tentang RTH Card */}
          <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.sectionTitle}>Tentang RTH</Text>
                <Text style={styles.paragraph}>
                  RTH adalah area atau jalur dalam kota atau wilayah yang digunakan untuk penghijauan.
                  Fungsi utamanya meliputi pengaturan iklim mikro, estetika, hingga peningkatan kualitas udara.
                </Text>
              </Card.Content>
            </Card>
          </Animatable.View>

          {/* Gambar di Sela-sela */}
          <Animatable.View animation="zoomIn" duration={1200} delay={500}>
            <Image
              source={{ uri: 'https://teraspers.uajy.ac.id/wp-content/uploads/2021/10/rthp-brontokusuman-1.jpg' }}
              style={styles.image}
            />
          </Animatable.View>

          {/* Kelebihan RTH Card */}
          <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
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
          </Animatable.View>

          {/* Gambar di Sela-sela */}
          <Animatable.View animation="slideInUp" duration={1200} delay={800}>
            <Image
              source={{ uri: 'https://lingkunganhidup.jogjakota.go.id/resources/img/article/20170721140112.jpg' }}
              style={styles.image}
            />
          </Animatable.View>

          {/* Gambar yang bisa digulir kesamping */}
          <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
            <ScrollView horizontal={true} style={styles.horizontalScroll}>
              <Image
                source={{ uri: 'https://antasariplace.com/wp-content/uploads/2023/08/park-with-wooden-pathway-benches.webp' }}
                style={styles.horizontalImage}
              />
              <Image
                source={{ uri: 'https://rbasset.s3.ap-southeast-1.amazonaws.com/2024/06/06010221/FA-TENGAH_RTH.jpg' }}
                style={styles.horizontalImage}
              />
              <Image
                source={{ uri: 'https://hijauku.com/wp-content/uploads/2013/04/Pathways-at-Green-Park-Hachimaki.jpg' }}
                style={styles.horizontalImage}
              />
            </ScrollView>
          </Animatable.View>

          {/* Footer Card */}
          <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.footerText}>Mari jaga dan kembangkan RTH untuk masa depan yang lebih hijau 🌳</Text>
              </Card.Content>
            </Card>
          </Animatable.View>
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
    backgroundColor: 'rgba(76, 175, 80, 1)', // Transparansi untuk background header
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
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000', // Menambahkan efek bayangan pada teks
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
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
  horizontalScroll: {
    marginVertical: 10,
  },
  horizontalImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

export default Homedata;
