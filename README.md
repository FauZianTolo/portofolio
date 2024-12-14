# 🌳 Sebaran Ruang Terbuka Hijau Publik di Kota Yogyakarta, DIY 🌳

Aplikasi **Sebaran Ruang Terbuka Hijau Publik** di Kota Yogyakarta, DIY bertujuan untuk mempermudah masyarakat dan pengunjung dalam mencari, mengelola, dan berkontribusi terhadap data **Ruang Terbuka Hijau (RTH)** di kota Yogyakarta. Aplikasi ini memberikan informasi lengkap mengenai lokasi, fasilitas, rating, dan status setiap RTH, serta memungkinkan pengelola atau pengguna untuk menambah dan memperbarui data.

---

## 🎯 **Tujuan Aplikasi**

Aplikasi ini hadir untuk:

- Menyediakan informasi RTH yang mudah diakses oleh masyarakat.
- Membantu pengguna untuk menemukan RTH terdekat, mengeksplorasi berbagai RTH, dan menilai kualitasnya.
- Memfasilitasi pengelola dan masyarakat untuk memperbarui dan menambah informasi RTH yang belum terdaftar.

---

## 🧩 **Fitur Utama**

### 1. **Homescreen 🏠**
   - Menampilkan daftar RTH dengan informasi dasar seperti nama, rating, alamat, dan jam operasional.
   - Fitur pencarian dan filter berdasarkan nama, rating, atau lokasi.
   - Pengguna dapat memilih RTH untuk melihat detail lebih lanjut atau melihat lokasi pada peta.

### 2. **List Data RTH 📋**
   - Daftar RTH yang dapat disortir atau dicari.
   - Setiap item dalam daftar dapat di-klik untuk membuka detail RTH.

### 3. **Profil Screen 👤**
   - Menampilkan informasi pribadi pengguna dan riwayat aktivitas terkait RTH.
   - Pengguna dapat mengedit profil dan memberikan feedback terhadap RTH.

### 4. **Tampilan Peta dan Marker 🗺️**
   - Menampilkan lokasi RTH di peta menggunakan Google Maps API.
   - Setiap marker menunjukkan lokasi RTH dengan informasi tambahan seperti nama, rating, dan gambar.

### 5. **Fitur Tambah Titik dan Marker ➕**
   - Pengguna dapat menambahkan titik baru ke dalam aplikasi dengan informasi lengkap seperti nama, alamat, rating, gambar, dan jam operasional.
   - Marker baru akan muncul di peta dengan informasi yang dapat dilihat oleh pengguna lain.

### 6. **Edit Data RTH ✏️**
   - Pengguna dengan hak akses dapat mengedit data RTH yang sudah ada.
   - Memungkinkan pembaruan data seperti jam operasional, fasilitas, atau gambar.

---

## 🛠️ **Teknologi yang Digunakan**

Aplikasi ini dibangun menggunakan berbagai teknologi modern untuk memastikan kinerja yang optimal dan pengalaman pengguna yang memuaskan.

- **React Native**: Framework untuk membangun aplikasi mobile yang dapat berjalan di platform Android dan iOS.
- **React Navigation**: Untuk navigasi antar halaman di aplikasi.
- **Google Maps API**: Untuk menampilkan peta dan lokasi RTH.
- **API Backend**: Mengelola data RTH dan mendukung operasi CRUD (Create, Read, Update, Delete).
- **State Management**: Menggunakan `useState` dan `useEffect` untuk pengelolaan state di aplikasi.

---

## 🛠️ **Cara Penggunaan**

1. **Unduh dan Pasang Aplikasi**:
   - Aplikasi ini tersedia di **Google Play Store** dan **App Store**. Cari "Sebaran Ruang Terbuka Hijau Publik Yogyakarta."

2. **Menambahkan Data RTH Baru**:
   - Pengguna dapat menambah titik baru dengan mengisi informasi RTH dan menandai lokasinya di peta.

3. **Melihat Detail RTH**:
   - Pilih RTH dari daftar untuk melihat informasi lebih lanjut, rating, dan fasilitas yang tersedia.

4. **Navigasi ke Lokasi**:
   - Gunakan fitur peta untuk menemukan rute menuju lokasi RTH melalui **Google Maps**.

---

## 🧑‍💻 **Instalasi & Pengaturan** 

Untuk mengembangkan aplikasi ini secara lokal, ikuti langkah-langkah berikut:

1. **Clone Repository**:
   ```bash
   git clone https://github.com/username/sebaran-rth-yogyakarta.git
