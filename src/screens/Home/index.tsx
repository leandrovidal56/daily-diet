import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';
import { PercentageCard } from '@components/PercentageCard'
import { Button } from '@components/Button'
import { SummaryCard } from '@components/SummaryCard'
import { Input } from '@components/Input';
import { Line } from '@components/Line';


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


