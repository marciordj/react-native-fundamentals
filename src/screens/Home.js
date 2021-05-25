import React, {useCallback, useEffect, useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, Platform, FlatList, StatusBar } from 'react-native';


import Button from '../components/Button';
import SkillCard from '../components/SkillCard';


const Home = () => {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([])
  const [grettings, setGretting] = useState('')

  const currentHour = new Date().getHours();

  const handleAddSkill = useCallback(() => {
    setMySkills(oldSkill => [...oldSkill, newSkill])
  })

  useEffect(() => {

     if (currentHour < 12) {
       return setGretting('Bom dia')
     }

     if (currentHour >= 12 && currentHour <= 18) {
       return setGretting('Boa Tarde')

     }

     return setGretting('Boa noite')
  }, []) 

  //toda vez que esse estado sofrer qualquer alteração, o use effect vai disparar a função que está nele
  //Mas se nao tiver nenhuma dependecia, ele só vai disparar quando o componente for montado
  //um bom exemplo aqui do que falei, é que quando coloco o newSkill, que está guardando o estado de setNewSkill, que é modificado cada vez que 
  //é modificado alguma coisa no input, ele dispara um console.log, que foi a função que passei pra ele

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Ignite</Text>

      <Text style={styles.subtitle}>{grettings}</Text>

      <TextInput 
      style={styles.input} 
      placeholder='New Skill' 
      onChangeText={setNewSkill} //pra ficar explicito, poderia colocar text => setNewSkill(text)
      placeholderTextColor='#c3c3c3' 
      />

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
    paddingTop: 20
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#fff'
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