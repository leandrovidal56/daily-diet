import { Button } from "@components/Button";
import { DateCalendar } from "@components/DateCalendar";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { eatAddByUser } from "@storage/user/userAddEat";
import { eatsGetAll } from "@storage/user/userGetEat";
import { SetStateAction, useEffect, useState } from "react";
// import TimePicker from 'react-time-picker';
import DateTimePicker from '@react-native-community/datetimepicker';


import { Container, Content, Header, Text, Row, BackIcon, BackButton  } from "./styles";
import { Platform } from "react-native";
import { TimeCalendar } from "@components/TimeCalendar";

export function NewEat(){
  const [eat, setEat] = useState('')
  const [eatDescription, setEatDescription] = useState('')
  const [diet, setDiet ] = useState(null)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const navigation = useNavigation();
console.log(date, 'take data first')

  async function handleFeedBack(){
    // AsyncStorage.clear()
    eatAddByUser(eat, eatDescription, diet, date, time)
    setEat('')
    setEatDescription('')
    setDiet(null)
    
    setDate(new Date())
    console.log(date, 'take date inside function')
    navigation.navigate('FeedBack')
  }
  
  function handleGoBack(){
    navigation.goBack()
    // AsyncStorage.clear()
    eatsGetAll()
  }

  console.log(date, 'teste')
    return (
        <Container>
            <Header>
              <BackButton onPress={handleGoBack}>
                <BackIcon  />
              </BackButton>
                <Text>Nova refeição</Text>
            </Header>
            <Content>
                <Input title="Nome"  value={eat} onChangeText={(text) => setEat(text)}/>
                <Input title="Descrição" large value={eatDescription} onChangeText={(text) => setEatDescription(text)} />
                <Row>
                    <DateCalendar 
                     dateValue={date}
                      teste="date"  
                       setTime={setTime}
                       exportDate={setDate}
                    />
                    <DateCalendar 
                    dateValue={date}
                    teste="time"
                       setTime={setTime}
                       exportDate={setDate}
                     />
                </Row>
                <Select diet={diet} setDiet={setDiet} />
            </Content>
            <Button title="Cadastrar refeição"  onPress={handleFeedBack}/>
        </Container>
    )
}