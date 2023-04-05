import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './styles';
import { PercentageCard } from '@components/PercentageCard'
import { Button } from '@components/Button'
import { Line } from '@components/Line';
import { Header } from '@components/Header';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { eatsGetAll } from '@storage/user/userGetEat';
import { FlatList } from 'react-native';


export function Home() {
const [eats, setEats] = useState(['teste'])
  const navigation = useNavigation();

  function handleNewEat(){
    navigation.navigate('NewEat')
  }

  async function fetchEatAll() {
    const takeEat = await eatsGetAll()
    setEats(takeEat)
  }

  useFocusEffect(useCallback(() => {
    fetchEatAll();
  },[eatsGetAll]))

  return (
    <Container>
      <Header/>
      <StatusBar style="auto" />
      <PercentageCard
        title='90,86%'
        subTitle='das refeições dentro da dieta'
      />
      <Text>Refeições</Text>
      <Button title='Nova refeição' onPress={ handleNewEat}/>
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


