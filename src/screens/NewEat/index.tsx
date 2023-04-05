import { Button } from "@components/Button";
import { DateCalendar } from "@components/DateCalendar";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { eatAddByUser } from "@storage/user/userAddEat";
import { eatsGetAll } from "@storage/user/userGetEat";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';


import { Container, Content, Header, Text, Row, BackIcon, BackButton  } from "./styles";
import { Platform } from "react-native";

export function NewEat(){
  const [eat, setEat] = useState('')
  const [eatDescription, setEatDescription] = useState('')
  const [diet, setDiet ] = useState(false)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [enable, setEnable] = useState(true)
  const navigation = useNavigation();

  
  
  

  async function handleFeedBack(){
    eatAddByUser(eat, eatDescription, diet, date, time)
    setEat('')
    setEatDescription('')
    setDiet(false)
    setDate('')
    if(diet){
      navigation.navigate('FeedBack')
    }else{
      navigation.navigate('FeedBackBad')
    }
  }
  
  function handleGoBack(){
    navigation.goBack()
    eatsGetAll()
  }
  function startDateAndTime(){
    let startDate = new Date()
    let formatDate = startDate.getDate() + '/' + (startDate.getMonth() +1) + '/' + startDate.getFullYear()
    setDate(formatDate)

    if(startDate.getMinutes() < 10){
      let formatMinutes = `${ "0"+(startDate.getMinutes())}`
      let fTime = `${startDate.getHours()}:${formatMinutes}`;
      setTime(fTime)
    } else if(startDate.getHours()< 10){
      let formatHours = `${ "0"+(startDate.getHours())}`
      let fTime = `${formatHours}:${startDate.getMinutes()}`;
      setTime(fTime)
    }else{
      let fTime = `${startDate.getHours()}:${startDate.getMinutes()}`;
      setTime(fTime)
    }
  }
  useFocusEffect(useCallback(() => {
    startDateAndTime()
  },[]))

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
                      exportDate={setDate}
                    />
                    <DateCalendar 
                       modeCalendar="time"
                       exportTime={setTime}
                     />
                </Row>
                <Select diet={diet} setDiet={setDiet} />
            </Content>
            <Button
            //  disabled={enable} 
             title="Cadastrar refeição"  onPress={handleFeedBack}/>
        </Container>
    )
}


