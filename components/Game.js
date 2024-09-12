import { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import GuessForm from './GuessForm';

function Game () {

    const [correctAnswer] = useState('42');

    const handleGuess = (guess) => {
        console.log(`User guessed: ${guess}`);
    };

    return (
        <SafeAreaView style={styles.container}>
          <GuessForm correctAnswer={correctAnswer} onGuess={handleGuess} />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  });

export default Game;