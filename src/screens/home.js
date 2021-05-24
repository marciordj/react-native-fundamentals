import React from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity } from 'react-native';


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Ignite</Text>

      <TextInput style={styles.input} placeholder='New Skill' placeholderTextColor='#c3c3c3' />

      <TouchableOpacity style={styles.button} activeOpacity={0.75}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50 }]}>My skills</Text>   
      {/* Da pra reaproveitar estilos de outros componentes e incrementar com algo que falta passando no array */}
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
  }
})



export default Home