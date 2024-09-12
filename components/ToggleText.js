import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

function ToggleText () {

    const [isVisible, setIsVisible] = useState(false);

    const toggleTextVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <View style={styles.container}>
            <Button title={isVisible ? "Esconder texto" : "Mostrar texto"} onPress={toggleTextVisibility}/>
            {isVisible && ( <Text style={styles.text}>Texto a Mostrar</Text> )}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      margin: 10,
      alignItems: 'center',
    },
    text: {
      color: '#ffffff',
      fontSize: 18,
      marginBottom: 10,
    },
  });


export default ToggleText;