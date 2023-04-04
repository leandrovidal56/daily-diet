import React, { useState } from "react";
import { Container, Content, ViewCalendarCenter, ViewCalendar, Text } from "./styles";
import {  TouchableOpacityProps } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = TouchableOpacityProps &{
  teste?: string,
  setTime?: any,
  exportDate?: any,
  // dateValue?: any, 
}


// export function DateCalendar({teste, setTime, exportDate, dateValue}:Props) {
export function DateCalendar({teste, setTime, exportDate}:Props) {


  // const [date, setDate] = useState(dateValue);

  const [mode, setMode] = useState(teste);
  const initialDate =(new Date().getDate, new Date().getDay() + new Date().getHours())

  const onChange = (event, selectedDate: any) => {
    // const currentDate = selectedDate || date;
    const currentDate = selectedDate;


    let tempDate = new Date(currentDate)
    if( mode === 'date'){
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear()
      
      exportDate(fDate)
      // setDate(currentDate);
    }

    if( mode === 'time'){
      if(tempDate.getMinutes() < 10){
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
    exportDate(currentDate)
    // setDate(currentDate);
  };

    return (
      <Container onPress={() => setOpen(true)} >
      <Text>Data</Text>
       <Content>
       <DateTimePicker
          testID="dateTimePicker"
          // value={date}
          value={new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
       </Content>
    </Container>
    )
}

