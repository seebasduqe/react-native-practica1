import { View, Image, StyleSheet, FlatList } from 'react-native';

function ImageList({ imageUrls }) {
 
  const renderImage = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageUrls}
        renderItem={renderImage}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
});

export default ImageList;