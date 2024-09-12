import { StyleSheet, SafeAreaView } from 'react-native';
import ImageList from './ImageList'; // Ajusta la ruta si es necesario

function ImageGallery() {
  const imageUrls = [
    require('../assets/favicon.png'),
    require('../assets/icon.png'),
    require('../assets/splash.png'),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageList imageUrls={imageUrls} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImageGallery;