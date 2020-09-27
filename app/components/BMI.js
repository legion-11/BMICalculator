import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
} from 'react-native';


function calcBMI(weight, heigh, imperial) {
  if (imperial){
    weight = weight*0.453592
    heigh = heigh*2.54
  }
  var calc = weight/(Math.pow(heigh/100, 2))
  return  (isNaN(calc)) ? 'BMI': calc.toString()
}

export default function BMI()  {
  const [heigh, setHeigh] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [isImperial, setImperial] = React.useState(false);

  const toggleSwitch = () => setImperial(previousState => !previousState);
  return (
    <View style={styles.metrContainer}>
      <Text style={styles.text}>
        {isImperial ? "Imperial System": "Metric System"}

      </Text>
      <Switch style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isImperial ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isImperial}s
      />
      <TextInput style={styles.textinput}
      placeholder={isImperial ? "Heigh in": "Heigh cm"}
      keyboardType='number-pad'
      onChangeText= {text => setHeigh(parseInt(text, 10))}
      />

      <TextInput style={styles.textinput}
      placeholder={isImperial ? "Weight ib": "Weight kg"}
      keyboardType='number-pad'
      onChangeText= {text => setWeight(parseInt(text, 10))}
      />
      <TextInput style={{
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
      }}
        editable={false}
        value={calcBMI(weight, heigh, isImperial)}
      />
    </View>
  );
};

const styles = StyleSheet.create(
  {
    metrContainer:{
      alignSelf: 'stretch',
    },
    textinput:{
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      borderBottomColor: '#000',
      borderBottomWidth: 1,
    },
    text:{
      textAlign: 'left',
      alignSelf: 'center',
      fontSize: 32,
    },
    switch:{
      alignSelf: 'center',
    },
  }
);
