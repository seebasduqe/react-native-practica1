import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ClickCounter () {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
          <Button
            title="sumar"
            onPress={handlePress}
          />
          <Text style={styles.text}>Button pressed {count} times</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontSize: 18,
      marginTop: 20,
    },
});

export default ClickCounter;