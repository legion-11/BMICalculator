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
function getCategories(weight, heigh, imperial) {
  var bmi = calcBMI(weight, heigh, imperial)
  if (isNaN(bmi)){
    return ''
  }else if (bmi < 18.5){
    return 'Underweight'
  }else if (bmi < 24.9) {
    return 'Normal weight'
  }else if (bmi < 29.9) {
    return 'Overweight '
  }else{
    return  'Obesity '
  }
}

export default function BMI()  {
  const [heigh, setHeigh] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [isImperial, setImperial] = React.useState(false);

  const toggleSwitch = () => {
    setImperial(previousState => !previousState)
    setHeigh(0)
    setWeight(0)
  }

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

      <Text style={{
        alignSelf: 'center',
        fontSize: 22,
      }}>
        {calcBMI(weight, heigh, isImperial)}
      </Text>

      <Text style={{
        alignSelf: 'center',
        fontSize: 22,
      }}>
        {getCategories(weight, heigh, isImperial)}
      </Text>
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
