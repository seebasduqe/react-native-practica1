import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function DynamicForm (onRegister) {
    const [inputText, setInputText] = useState('');
    const [submittedText, setSubmittedText] = useState('');
    
    const handleInputChange = (text) => {
        setInputText(text);
    };

    const handleSubmit = () => {
        setSubmittedText(inputText);
        setInputText('');
    };

    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Escribe algo aquí..."
            value={inputText}
            onChangeText={handleInputChange}
          />
          <Button
            title="Submit"
            onPress={handleSubmit}
          />
          {submittedText !== '' && (
            <Text style={styles.result}>{submittedText}</Text>
          )}
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
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '100%',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    result: {
      marginTop: 20,
      fontSize: 18,
      color: 'blue',
    },
});
  

export default DynamicForm;