import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './styles';
import { PercentageCard } from '@components/PercentageCard'
import { Button } from '@components/Button'
import { Line } from '@components/Line';
import { Header } from '@components/Header';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { eatsGetAll } from '@storage/user/userGetEat';
import { FlatList, View } from 'react-native';

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
const [eatsGroups, setEatsGroups] = useState({})
const [eatsPercentage, setEatsPercentage] = useState(0)
const [dataKeys, setDataKeys] = useState([])

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
async function groupEat(){
  const takeEat = await eatsGetAll()
  const takeEatsByDay = await takeEat.filter(item => item.date)

  const grouped = takeEat.reduce((acc, item) => {
    const key = item.date;
    if(!acc[key]){
        acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});
  
  setDataKeys(grouped)
  
  setEatsGroups(grouped)
  console.log(dataKeys, '$$$#$');

}

  useFocusEffect(useCallback(() => {
    fetchEatAll();
    groupEat();
  },[eatsGetAll]))

  function dataComparator(date1: any, date2: any) {
    return new Date(date1) - new Date(date2);
  }
  
  const headers = Object.keys(dataKeys).sort(dataComparator);

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
        data={headers}
        keyExtractor={(item: EatProps) => String(item)}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
            {
              dataKeys[item].map(i => (
                <Line item={i}/>
              ))
            }
          </View>
          )}
      />
    </Container>
  );
}


