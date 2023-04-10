import React, { useState } from "react";
import { Container, Content, Text } from "./styles";
import { TouchableOpacityProps, Platform } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

type Props = TouchableOpacityProps &{
  modeCalendar: string,
  exportDate?: any,
  exportTime?: any,
}


export function DateCalendar({modeCalendar, exportDate, exportTime}:Props) {

  const [date, setDate] = useState<Date>(new Date());

  const onChange = (event: DateTimePickerEvent, selectedDate) => {
    const currentDate = selectedDate;
    setDate(selectedDate);

    let tempDate = currentDate
    if( modeCalendar !== 'time'){
      let formatedDate = `${tempDate.getDate()+ '/' +(tempDate.getMonth() +1) + '/'+ tempDate.getFullYear()}`
      exportDate(formatedDate)
      console.log(formatedDate, 'formatedDate')
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear()
      console.log(fDate, 'fDate')
      exportDate(fDate)
    }
    
    if(modeCalendar === 'time'){
      if(tempDate.getMinutes() < 10){
        // let formatMinutes = `${ "0"+(tempDate.getMinutes())}`
        let formatMinutes = `0${tempDate.getMinutes()}`
        let formatedTime = `${tempDate.getHours()}:${formatMinutes}`;
        exportTime(formatedTime)
      } else if(tempDate.getHours()< 10){
        let formatHours = `${ "0"+(tempDate.getHours())}`// todo corrigir 
        let formatedTime = `${formatHours}:${tempDate.getMinutes()}`;
        exportTime(formatedTime)
      }else{
        let formatedTime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
        exportTime(formatedTime)
      }
    }
  };

    return (
      <Container>
      <Text>Data</Text>
       <Content>
       <DateTimePicker
          value={date}
          locale="pt-BR"
          mode={modeCalendar}
          is24Hour={true}
          onChange={(event, selectedDate) => onChange(event, selectedDate)}
        />
       </Content>
    </Container>
    )
}

