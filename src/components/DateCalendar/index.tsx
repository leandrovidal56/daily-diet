import React, { useState } from "react";
import { Container, Content, ViewCalendarCenter, ViewCalendar, Text } from "./styles";
import {  TouchableOpacityProps } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = TouchableOpacityProps &{
  teste?: string,
  setTime?: any,
  exportDate?: any,
  dateValue?: any, 
}


export function DateCalendar({teste, setTime, exportDate, dateValue}:Props) {


  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(dateValue);
  const [mode, setMode] = useState(teste);

  const onChange = (event, selectedDate: any) => {
    console.log(dateValue, 'pegar o que está vindo')
    const currentDate = selectedDate || date;

    console.log(currentDate, 'currentDate')
    console.log(selectedDate, 'selectedDate')
    let tempDate = new Date(currentDate)
    console.log(tempDate, 'teste final')
    if( mode === 'date'){
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear()
      console.log(fDate, 'take fdate')
      console.log(currentDate, 'take current Date')
      
      exportDate(fDate)
      setDate(currentDate);
    }

    if( mode === 'time'){
      if(tempDate.getMinutes() < 10){
        console.log('foi') 
        let formatMinutes = `${ "0"+(tempDate.getMinutes())}`
        let fTime = `${tempDate.getHours()}:${formatMinutes}`;
        setTime(fTime)
      } else if(tempDate.getHours()< 10){
        let formatHours = `${ "0"+(tempDate.getHours())}`
        let fTime = `${tempDate.getHours()}:${formatHours}`;
        setTime(fTime)

      }
      else{
        let fTime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
        setTime(fTime)
      }
    }

    setDate(currentDate);
  };

    return (
      <Container onPress={() => setOpen(true)} >
      <Text>Data</Text>
       <Content>
       <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
       </Content>
    </Container>
    )
}

