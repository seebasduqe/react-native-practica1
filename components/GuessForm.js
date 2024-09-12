import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function GuessForm({ correctAnswer, onGuess }) {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    if (guess === correctAnswer) {
      setFeedback('Correcto');
    } else {
      setFeedback('Incorrecto');
    }

    onGuess(guess);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Submit" onPress={handleGuess} />
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  feedback: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GuessForm;