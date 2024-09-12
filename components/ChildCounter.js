import { View, Text, Button, StyleSheet } from 'react-native';

function ChildCounter({ count, increment }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={increment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ChildCounter;