
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import BMI from './app/components/BMI'

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <BMI/>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      paddingVertical: 20
    },
  }
);

export default App;
