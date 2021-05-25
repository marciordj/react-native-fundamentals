import React, {useCallback, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity } from 'react-native';


const Home = () => {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([])

  const handleAddSkill = useCallback(() => {
    setMySkills(oldSkill => [...oldSkill, newSkill])
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Ignite</Text>

      <TextInput style={styles.input} placeholder='New Skill' onChangeText={setNewSkill} placeholderTextColor='#c3c3c3' />

      <TouchableOpacity style={styles.button} onPress={handleAddSkill} activeOpacity={0.75}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>   
      {/* Da pra reaproveitar estilos de outros componentes e incrementar com algo que falta passando no array */}

      {mySkills.map(data => (
        <View key={data} style={styles.skillContainer}>
          <Text style={styles.text}>{data}</Text>   
        </View>
      ))}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e24',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    color: '#fff',
    marginTop: 30,
    borderRadius: 7
  },
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
  },
  skillContainer: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 5
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})



export default Home