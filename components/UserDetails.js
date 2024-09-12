import { View, Text, StyleSheet } from 'react-native';

function UserDetails (props) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}> Nombre: {props.name} </Text>
          <Text style={styles.text}> Edad: {props.age} </Text>
          <Text style={styles.text}> Ocupación : {props.occupation} </Text>
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

export default UserDetails;