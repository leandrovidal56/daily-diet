import React, { useState } from "react";
import { Container, Content, Text } from "./styles";
import {  TouchableOpacityProps } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = TouchableOpacityProps &{
  setTime?: any,
}


export function TimeCalendar({setTime}:Props) {
  const [date, setDate] = useState(new Date());
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate.getHours();
    const currentMinutes = selectedDate.getMinutes();
    const hours = `${currentDate}:${currentMinutes}`
    setTime(hours)
  };
    return (
      <Container >
        <Text>Hora</Text>
        <Content>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            onChange={onChange}
          />
       </Content>
    </Container>
    )
}


  