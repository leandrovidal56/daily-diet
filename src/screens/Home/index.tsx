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

type EatProps = {
  eat?: string;
  description?: string;
  date?: string;
  time?: string;
  diet?: boolean;  
  id?: string;
}

export function Home() {

const [eats, setEats] = useState<EatProps[]>([])
const [eatsPercentage, setEatsPercentage] = useState(0)

  const navigation = useNavigation();

  function handleNewEat(){
    navigation.navigate('NewEat')
  }

  async function fetchEatAll() {
    try{
      const takeEat = await eatsGetAll()
      setEats(takeEat)
      const good = takeEat.filter(object => object.diet);
      setEatsPercentage((good.length / takeEat.length) *100)
    }catch(error){
      console.error(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchEatAll();
  },[eatsGetAll]))
  
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
        keyExtractor={(item: EatProps) => String(item.id)}
        renderItem={({item}) => (
          <Line item={item}/>
        )}
      />
    </Container>
    
  );
}


