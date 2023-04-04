import { Button } from "@components/Button";
import { DateCalendar } from "@components/DateCalendar";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { eatAddByUser } from "@storage/user/userAddEat";
import { eatsGetAll } from "@storage/user/userGetEat";
import { SetStateAction, useEffect, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';


import { Container, Content, Header, Text, Row, BackIcon, BackButton  } from "./styles";
import { Platform } from "react-native";

export function NewEat(){
  const initialDate =(`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`)
  console.log(initialDate, 'takedate first')
  let tempDate = new Date()
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear()
  console.log(fDate, 'take fdate ')
  
  
  const [eat, setEat] = useState('')
  const [eatDescription, setEatDescription] = useState('')
  const [diet, setDiet ] = useState(false)
  const [date, setDate] = useState( initialDate)
  // const [date, setDate] = useState(new Date())
  
  // const [date, setDate] = useState(`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
  const [time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`)
  const navigation = useNavigation();

  


  async function handleFeedBack(){
    // AsyncStorage.clear()
    eatAddByUser(eat, eatDescription, diet, date, time)
    setEat('')
    setEatDescription('')
    setDiet(false)
    
    setDate(new Date())
    
    navigation.navigate('FeedBack')
  }
  
  function handleGoBack(){
    navigation.goBack()
    // AsyncStorage.clear()
    eatsGetAll()
  }

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
                    //  dateValue={date}
                      teste="date"  
                       setTime={setTime}
                       exportDate={setDate}
                    />
                    <DateCalendar 
                      //  dateValue={date}
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


