import { View, Text, StyleSheet } from 'react-native';

function Task (props) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}> {props.title} </Text>
          <Text style={styles.text}> {props.completed ? 'Completada' : 'No Completada'} </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      margin: 10,
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
  });

export default Task;