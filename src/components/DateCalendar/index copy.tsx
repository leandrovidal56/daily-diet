import React, { useState } from "react";
import { Container, Content, ViewCalendarCenter, ViewCalendar, Text } from "./styles";
import {  Platform, TouchableOpacityProps } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = TouchableOpacityProps &{
  modeCalendar?: string,
  exportDate: any,
}


export function DateCalendar({modeCalendar, exportDate}:Props) {


  const initialDate =(new Date().getDate, new Date().getDay() + new Date().getHours())
  const [date, setDate] = useState(new Date());

  // const [mode, setMode] = useState(modeCalendar);
  const [mode, setMode] = useState('date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log(currentDate, 'take firs step')
    // setDate(currentDate);


    let tempDate = new Date(currentDate)
    // if( mode === 'date'){
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear()
      exportDate(fDate)
    // }

    if( mode === 'time'){
      if(tempDate.getMinutes() < 10){
        let formatMinutes = `${ "0"+(tempDate.getMinutes())}`
        let fTime = `${tempDate.getHours()}:${formatMinutes}`;
        // setTime(fTime)
      } else if(tempDate.getHours()< 10){
        let formatHours = `${ "0"+(tempDate.getHours())}`
        let fTime = `${tempDate.getHours()}:${formatHours}`;
        // setTime(fTime)
      }
      else{
        let fTime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
        // setTime(fTime)
      }
    }
    // exportDate(currentDate)

    
  };
  


    return (
      <Container>
      <Text>Data</Text>
       <Content>
       <DateTimePicker
          testID="dateTimePicker"
          value={date}
          // value={new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
       </Content>
    </Container>
    )
}

