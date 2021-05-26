import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface IProps extends TouchableOpacityProps{
  skill: string;
}


const SkillCard = ({ skill, onPress }: IProps) => { //Coloquei outro tipo chamando props sem destruturing só pra lembrar, fique só no ts mesmo vai
  return (
    <TouchableOpacity onPress={onPress} style={styles.skillContainer}>
      <Text style={styles.text}>{skill}</Text>
    </TouchableOpacity>
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