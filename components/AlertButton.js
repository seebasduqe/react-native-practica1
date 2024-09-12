import { View, Button, StyleSheet } from 'react-native';

function AlertButton ({onPress}) {
    return (
        <View style={styles.container}>
          <Button
            title="Mostrar Alerta"
            onPress={onPress}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
  });

export default AlertButton;