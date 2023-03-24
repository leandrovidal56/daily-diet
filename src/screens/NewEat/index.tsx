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
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const navigation = useNavigation();


  async function handleFeedBack(){
    eatAddByUser(eat, eatDescription, diet, date)
    // navigation.navigate('FeedBack')
    // AsyncStorage.clear()
  }
  
  function handleGoBack(){
    // navigation.goBack()
    eatsGetAll()
  }
    console.log(time, 'take time in first screen')
  
  // console.log(date, 'take date in first screen')
  // useEffect(() => {
  // },[time])
  
    return (
        <Container>
            <Header>
              <BackButton onPress={handleGoBack}>
                <BackIcon  />
              </BackButton>
                <Text>Nova refeição</Text>
            </Header>
          
            <Content>
                <Input title="Nome" onChangeText={setEat}/>
                <Input title="Descrição" large onChangeText={setEatDescription}/>
                <Row>
                    <DateCalendar teste="date"  setDate={setDate} />
                    <DateCalendar teste="time"  setTime={setTime} />
                    {/* <TimeCalendar setTime={setTime} /> */}
                    {/* <Input title="Hora" small /> */}
                </Row>
                <Select diet={diet} setDiet={setDiet} />
            </Content>
            <Button title="Cadastrar refeição"  onPress={handleFeedBack}/>

        </Container>
    )
}