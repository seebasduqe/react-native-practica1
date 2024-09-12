import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contador from './Contador';

function ListaContador()  {
  return (
    <View style={styles.listContainer}>
      <Contador valorInicial={3} />
      <Contador valorInicial={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
});

export default ListaContador;
