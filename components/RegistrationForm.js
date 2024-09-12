import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function RegistrationForm ({onRegister}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        const userData = {
          name,
          email,
          password
        };
        onRegister(userData); // Pasar los datos a App.js
    };

    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            title="Register"
            onPress={handleRegister}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      width: '100%',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default RegistrationForm;