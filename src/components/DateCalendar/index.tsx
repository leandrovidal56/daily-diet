import React, { useState } from "react";
import { Container, Content, ViewCalendarCenter, ViewCalendar, Text } from "./styles";
import {Calendar} from 'react-native-calendars';
import { Alert, Modal, Platform, TouchableOpacityProps } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from "@components/Button";

type Props = TouchableOpacityProps &{
  setDate?: string,
  teste?: string,
  setTime?: any,
}


export function DateCalendar({setDate,teste, setTime}:Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [date1, setDate1] = useState(new Date());
  // const [mode, setMode] = useState('date');
  const [mode, setMode] = useState(teste);
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate) => {
    if(mode === 'time') {
      const currentDate = selectedDate.getHours();
      const currentMinutes = selectedDate.getMinutes();
      const hours = `${currentDate}:${currentMinutes}`
     return setTime(hours)
    }
    const currentDate = selectedDate;
    console.log(currentDate, 'melhor forma')
    setShow(false);
    setDate1(currentDate);
    setDate(currentDate)
  };
  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

    return (
      <Container onPress={() => setOpen(true)} >
      {/* <Button small onPress={showDatepicker} title="Show date picker!" />
      <Button small onPress={showTimepicker} title="Show time picker!" /> */}
      <Text>Data</Text>
  
       <Content>
       <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
       </Content>

    </Container>
    )
}


      {/* <Text>Data</Text>
      <Content onPress={() => setOpen(true)}>
      <Modal
        animationType="slide"
        visible={open}
        style={{ flex: 1, 
          alignContent: 'center', 
          justifyContent: 'center',
          marginTop: 50
          
        }}
      >
        <ViewCalendar>
          <ViewCalendarCenter>
            <Calendar
              style={{
                borderWidth: 1,
                borderColor: 'gray',
              }}
              onDayPress={day => {
                setSelected(day.dateString);
                setDate(day.dateString );
                Alert.alert('Data selecionada', 'Desejar prosseguir com essa data?', 
                [
                  {
                    text: 'Sim',
                    onPress: () => setOpen(false)

                  },
                  {
                    text: 'Não',
                    style: 'cancel',
                  },
                ])
              }}
              markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'green'}
              }}
            /> 
          </ViewCalendarCenter>
        </ViewCalendar>
      </Modal>
      <Text>{selected}</Text> 
    // </Content> */}