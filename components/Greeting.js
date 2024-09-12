import { View, Text, StyleSheet } from 'react-native';

function Greeting (props) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}> Hola {props.name} </Text>
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
  

export default Greeting;