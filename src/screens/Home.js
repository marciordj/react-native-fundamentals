import React, {useCallback, useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, Platform, FlatList, ScrollView } from 'react-native';


import Button from '../components/Button';
import SkillCard from '../components/SkillCard';


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

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>   
      {/* Da pra reaproveitar estilos de outros componentes e incrementar com algo que falta passando no array */}

      <Button onPress={handleAddSkill} />

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard data={item} />
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false} >
        {mySkills.map(data => (
        <SkillCard data={data} key={data} />
        ))}
      </ScrollView> */}
    </SafeAreaView>
  )
}

/*Flatlist lida melhor com listas maiores do que map/scrollview
o scrollview/map vai renderizar tudode uma vez só, ja a flatlist vai conforme a necessidade, isso tem um ganho de performace
*/
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
  }
})



export default Home