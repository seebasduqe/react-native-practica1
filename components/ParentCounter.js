import { View, StyleSheet, SafeAreaView } from 'react-native';
import ChildCounter from './ChildCounter';
import { useState } from 'react';

function ParentCounter() {
    const [count, setCount] = useState(0);
  
    const incrementCounter = () => {
      setCount(count + 1);
    };
  
    return (
        <View>
            <SafeAreaView>
                <ChildCounter count={count} increment={incrementCounter} />
            </SafeAreaView>
        </View>
      
    );
}
  
export default ParentCounter;