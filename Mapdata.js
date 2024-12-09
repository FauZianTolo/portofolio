import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const MapScreen = () => {
  const osmUrl = 'https://www.openstreetmap.org/?lat=51.505&lon=-0.09&zoom=13';

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: osmUrl }}
        style={styles.webView}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
