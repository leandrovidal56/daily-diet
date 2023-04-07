import { Button } from "@components/Button";
import { DateCalendar } from "@components/DateCalendar";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { eatAddByUser } from "@storage/user/userAddEat";
import { useCallback, useEffect, useState } from "react";
import { Container, Content, Row  } from "./styles";
import { Keyboard } from "react-native";

export function NewEat(){
  const [eat, setEat] = useState('')
  const [eatDescription, setEatDescription] = useState('')
  const [diet, setDiet ] = useState(false)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [disable, setDisable] = useState(true)
  const navigation = useNavigation();


  async function handleFeedBack(){
    console.log(date, 'take date')
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
  function disableButton(){
    if(eat && eatDescription){
      setDisable(false)
    }
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
  
  useEffect(()=>{
    disableButton()
  },[eat, eatDescription])

    return (
        <Container>
            <HeaderBackButton title ="Nova Refeição"/>
            <Content>
                <Input autoCorrect={false} title="Nome"  value={eat} onChangeText={(text) => setEat(text)}/>
                <Input onSubmitEditing={()=>{Keyboard.dismiss()}} returnKeyType="send" multiline={true} autoCorrect={false} title="Descrição" large value={eatDescription} numberOfLines={2} onChangeText={(text)=> setEatDescription(text)} />
                <Row>
                    <DateCalendar 
                      modeCalendar="date"
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
             disabled={disable} 
             title="Cadastrar refeição"  onPress={handleFeedBack}/>
        </Container>
    )
}


