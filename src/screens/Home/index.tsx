import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './styles';
import { PercentageCard } from '@components/PercentageCard'
import { Button } from '@components/Button'
import { Line } from '@components/Line';
import { Header } from '@components/Header';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { eatsGetAll } from '@storage/user/userGetEat';
import { FlatList } from 'react-native';


export function Home() {
const [eats, setEats] = useState(['teste'])
const [eatsPercentage, setEatsPercentage] = useState(0)

  const navigation = useNavigation();

  function handleNewEat(){
    navigation.navigate('NewEat')
  }

  async function fetchEatAll() {
    try{
      const takeEat = await eatsGetAll()
      const good = takeEat.filter(object => object.diet);
      setEatsPercentage((good.length / takeEat.length) *100)
      setEats(takeEat)
    }catch(error){
      console.error(error)
    }
  }



  useFocusEffect(useCallback(() => {
    fetchEatAll();
  },[eatsGetAll]))
  
  useEffect(() =>{
    
    
},[])

  return (
    <Container>
      <Header/>
      <StatusBar style="auto" />
      <PercentageCard
        title={`${eatsPercentage.toFixed(2)}%`}
        subTitle='das refeições dentro da dieta'
      />
      <Text>Refeições</Text>
      <Button title='Nova refeição' onPress={handleNewEat}/>
      <FlatList
      data={eats}
      keyExtractor={item => item}
      renderItem={({ item}) => (
        <Line item={item}/>
      )}
      />
    </Container>
    
  );
}


