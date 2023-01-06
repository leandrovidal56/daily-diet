import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './styles';
import { PercentageCard } from '@components/PercentageCard'
import { Button } from '@components/Button'
import { SummaryCard } from '@components/SummaryCard'
import { Input } from '@components/Input';
import { Line } from '@components/Line';
import { Header } from '@components/Header';


export function Home() {
  return (
    <Container>
      <Header/>
      <StatusBar style="auto" />
      <PercentageCard />
      <Text>Refeições</Text>
      <Button title='Nova refeição'/>
      <Line/>
      <Line/>
      <Line/>
      <Line/>
      <Line/>
      <Line/>
      <Line/>
      <Line/>

      {/* <SummaryCard title="22" subTitle='melhor sequência dentro da dieta'/>
      <SummaryCard title="109" subTitle='refeições registradas'/>
      <SummaryCard 
        small
        fail
        title="99" 
        subTitle='refeições dentro da dieta'
        />
        <Input/> */}
    </Container>
    
  );
}


