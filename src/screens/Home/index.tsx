import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Button, Line, Input, PercentageCard, SummaryCard, SummaryCardSmall } from './styles';

export function Home() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button/>
      <Line/>
      <Input/>
      <PercentageCard/>
      <SummaryCard/>
      <SummaryCardSmall/>
    </Container>
    
  );
}


