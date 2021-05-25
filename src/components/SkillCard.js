import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SkillCard = (props) => { //Coloquei outro tipo chamando props sem destruturing só pra lembrar, fique só no ts mesmo vai
  return (
    <View key={props.key} style={styles.skillContainer}>
      <Text style={styles.text}>{props.data}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  skillContainer: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})

export default SkillCard;