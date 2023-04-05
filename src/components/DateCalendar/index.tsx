import React, { useState } from "react";
import { Container, Content, ViewCalendarCenter, ViewCalendar, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = TouchableOpacityProps &{
  modeCalendar?: string,
  exportDate?: any,
  exportTime?: any,
}


export function DateCalendar({modeCalendar, exportDate, exportTime}:Props) {


  const initialDate =(new Date().getDate, new Date().getDay() + new Date().getHours())
  const [date, setDate] = useState(new Date());

  const [mode, setMode] = useState(modeCalendar || 'date');
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);

    let tempDate = currentDate
    if( mode !== 'time'){
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear()
      exportDate(fDate)
    }
    
    if(mode === 'time'){
      if(tempDate.getMinutes() < 10){
        let formatMinutes = `${ "0"+(tempDate.getMinutes())}`
        let fTime = `${tempDate.getHours()}:${formatMinutes}`;
        exportTime(fTime)
      } else if(tempDate.getHours()< 10){
        let formatHours = `${ "0"+(tempDate.getHours())}`
        let fTime = `${formatHours}:${tempDate.getMinutes()}`;
        exportTime(fTime)
      }else{
        let fTime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
        exportTime(fTime)
      }
    }
  };

    return (
      <Container>
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

