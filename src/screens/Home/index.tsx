import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Line, Input, SummaryCardSmall } from './styles';
import { PercentageCard } from '@components/PercentageCard'
import { Button } from '@components/Button'
import { SummaryCard } from '@components/SummaryCard'


export function Home() {
  return (
    <Container>
      <StatusBar style="auto" />
      <PercentageCard/>
      <Button title='Nova refeição'/>
      <SummaryCard title="22" subTitle='melhor sequência dentro da dieta'/>
      <SummaryCard title="109" subTitle='refeições registradas'/>

      <SummaryCard 
        small
        fail
        title="99" 
        subTitle='refeições dentro da dieta'
      />
      <Input/>
      <Line/>
    </Container>
    
  );
}


