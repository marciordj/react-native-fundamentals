import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({onPress}) => { //Se lembra de sempre pegar o mesmo nome que passou na chamada do componente e nao o nome da função ou dado que ta sendo mandado
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.75}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 15
  },
  buttonText:{
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
})

export default Button;
